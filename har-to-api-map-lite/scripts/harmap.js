#!/usr/bin/env node
// har-to-api-map-lite — .har → endpoint inventory (host/method/normalized path + counts).
"use strict";
const fs = require("node:fs");

const STATIC = /image\/|css|font|media|javascript|wasm|icon/i;

const norm = (p) =>
  p.split("/").map((s) =>
    /^\d+$/.test(s) ? ":id"
    : /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s) ? ":uuid"
    : /^[0-9a-f]{24,}$/i.test(s) ? ":id"
    : s
  ).join("/");

function main() {
  const file = process.argv[2];
  if (!file) { console.error("usage: node harmap.js <capture.har>"); process.exit(2); }
  let har;
  try { har = JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (e) { console.error(`cannot parse ${file}: ${e.message}`); process.exit(2); }

  const groups = new Map();
  let skipped = 0;
  for (const e of har?.log?.entries ?? []) {
    const { request: req, response: res } = e;
    if (!req?.url) continue;
    const mime = res?.content?.mimeType || "";
    let url;
    try { url = new URL(req.url); } catch { skipped++; continue; }
    if (STATIC.test(mime) || /\.(png|jpe?g|gif|webp|svg|ico|css|woff2?|ttf|js|map)(\?|$)/i.test(url.pathname)) { skipped++; continue; }
    const key = `${req.method} ${url.host}${norm(url.pathname)}`;
    const g = groups.get(key) || { method: req.method, host: url.host, path: norm(url.pathname), count: 0, statuses: {} };
    g.count++;
    g.statuses[res?.status ?? "?"] = (g.statuses[res?.status ?? "?"] ?? 0) + 1;
    groups.set(key, g);
  }
  const endpoints = [...groups.values()].sort((a, b) => b.count - a.count);
  console.log(JSON.stringify({
    file,
    totalEntries: har?.log?.entries?.length ?? 0,
    apiRequests: endpoints.reduce((a, x) => a + x.count, 0),
    staticSkipped: skipped,
    endpoints,
  }, null, 2));
}
main();
