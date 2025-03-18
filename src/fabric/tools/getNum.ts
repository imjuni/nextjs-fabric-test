export function getNum(num?: number | null, fallback?: number) {
  const nnFallaback = fallback ?? 0;
  return num ?? nnFallaback;
}
