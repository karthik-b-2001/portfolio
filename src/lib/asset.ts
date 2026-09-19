/**
 * Prefix a public/ asset path with the deploy base.
 *
 * Paths that live in JSON data are plain strings, so Vite never rewrites them
 * the way it rewrites imports and index.html references. That makes them break
 * silently whenever the deploy base is not "/", so everything pointing into
 * public/ goes through this and follows whatever base the build was made with.
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
