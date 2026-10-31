const SUPABASE_STORAGE_URL = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/portfolio-media`;

// Mídias servidas de public/images enquanto o projeto do Supabase está fora do ar.
// Para voltar ao Supabase, defina VITE_MEDIA_SOURCE=supabase no .env.
const MEDIA_BASE_URL =
  import.meta.env.VITE_MEDIA_SOURCE === "supabase" ? SUPABASE_STORAGE_URL : "/images";

/** Builds the public URL for a media file, e.g. mediaUrl("/ensaios/andiara1.jpeg") */
export const mediaUrl = (path: string) => `${MEDIA_BASE_URL}${path}`;
