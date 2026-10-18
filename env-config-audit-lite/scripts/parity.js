#!/usr/bin/env node
// env-config-audit-lite — .env vs .env.example key parity. Values are never printed.
"use strict";
const fs = require("node:fs");

const parse = (file) => {
  const map = new Map();
  fs.readFileSync(file, "utf8").split("\n").forEach((raw) => {
    const line = raw.trim();
    if (!line || line.startsWith("#") || !line.includes("=")) return;
    const i = line.indexOf("=");
    map.set(line.slice(0, i).trim(), line.slice(i + 1).trim());
  });
  return map;
};

function main() {
  const [envFile, exFile] = process.argv.slice(2);
  if (!envFile || !exFile) {
    console.error("usage: node parity.js <.env> <.env.example>");
    process.exit(2);
  }
  let env, ex;
  try { env = parse(envFile); ex = parse(exFile); }
  catch (e) { console.error(e.message); process.exit(2); }

  const missingInEnv = [...ex.keys()].filter((k) => !env.has(k));
  const extraInEnv = [...env.keys()].filter((k) => !ex.has(k));
  const emptyRequired = [...env.keys()].filter((k) => env.get(k) === "" || env.get(k) === '""' || env.get(k) === "''");

  const drift = missingInEnv.length + emptyRequired.length;
  console.log(JSON.stringify({
    envFile, exampleFile: exFile,
    envKeys: env.size, exampleKeys: ex.size,
    missingInEnv, extraInEnv, emptyRequired,
    missingInExample: extraInEnv,
    ok: drift === 0,
  }, null, 2));
  process.exit(drift ? 1 : 0);
}
main();
