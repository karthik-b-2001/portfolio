/**
 * Prefix a public/ asset path with the deploy base.
 *
 * Paths that live in JSON data are plain strings, so Vite never rewrites them
 * the way it rewrites imports and index.html references. On a project site
 * served from /portfolio/, a raw "/gallery/photo-1.jpg" resolves to the domain
 * root and 404s. Everything that points into public/ must go through this.
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
