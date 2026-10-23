export function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function matchesQuery(query: string, ...fields: string[]): boolean {
  const normalizedQuery = normalizeText(query);
  if (normalizedQuery === '') {
    return true;
  }
  return fields.some((field) => normalizeText(field).includes(normalizedQuery));
}