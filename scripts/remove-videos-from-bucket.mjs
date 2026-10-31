// One-off cleanup: removes .mp4 files accidentally uploaded to the
// portfolio-media bucket. Videos stay local for now (see plan notes).
//
// Usage: node --env-file=.env scripts/remove-videos-from-bucket.mjs

import { createClient } from "@supabase/supabase-js";

const BUCKET = "portfolio-media";

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const keys = [
  "videos/aniversario-15-years-01.mp4",
  "videos/aniversario-jorge.mp4",
  "videos/cris-e-pedro.mp4",
  "videos/pre-inauguracao-useareh.mp4",
  "videos/useareh-1.mp4",
  "videos/useareh-2.mp4",
  "videos/video-arena.mp4",
  "videos/video-arena2.mp4",
  "videos/video-demonstracao-tecnica(palestra).mp4",
  "videos/video-festa-emilly.mp4",
  "videos/video-palestra.mp4",
];

const { data, error } = await supabase.storage.from(BUCKET).remove(keys);
if (error) {
  console.error("Error removing files:", error.message);
  process.exit(1);
}
console.log(`Removed ${data.length} files:`, data.map((f) => f.name));
