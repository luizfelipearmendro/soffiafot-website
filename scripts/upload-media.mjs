// One-off script: uploads public/images/** to the Supabase Storage bucket
// "portfolio-media", preserving relative paths as storage keys.
//
// Usage:
//   node --env-file=.env scripts/upload-media.mjs
//
// Requires in .env:
//   VITE_SUPABASE_URL=https://xxxx.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY=xxxx   (Project Settings -> API -> service_role, never commit this)

import { createClient } from "@supabase/supabase-js";
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, extname } from "node:path";

const SOURCE_DIR = "public/images";
const BUCKET = "portfolio-media";

const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".webm": "video/webm",
};

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. Run with: node --env-file=.env scripts/upload-media.mjs"
  );
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function listFilesRecursive(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  const files = await listFilesRecursive(SOURCE_DIR);
  console.log(`Found ${files.length} files under ${SOURCE_DIR}`);

  let uploaded = 0;
  let failed = 0;

  for (const filePath of files) {
    const key = relative(SOURCE_DIR, filePath).split("\\").join("/");
    const contentType = CONTENT_TYPES[extname(filePath).toLowerCase()] ?? "application/octet-stream";
    const body = await readFile(filePath);
    const { size } = await stat(filePath);

    const { error } = await supabase.storage.from(BUCKET).upload(key, body, {
      contentType,
      cacheControl: "31536000",
      upsert: true,
    });

    if (error) {
      failed++;
      console.error(`FAIL  ${key} (${(size / 1024 / 1024).toFixed(2)} MB): ${error.message}`);
    } else {
      uploaded++;
      console.log(`OK    ${key} (${(size / 1024 / 1024).toFixed(2)} MB)`);
    }
  }

  console.log(`\nDone. ${uploaded} uploaded, ${failed} failed.`);
  if (failed > 0) process.exit(1);
}

main();
