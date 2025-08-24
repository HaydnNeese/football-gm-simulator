export function validateTeamSort(sortBy: string): string {
  const allowedSortFields = ["name", "abbreviation", "city", "wins", "losses"];
  return allowedSortFields.includes(String(sortBy))
    ? String(sortBy)
    : "name";
}

export function validatePlayerSort(sortBy: string): string {
  const allowedSortFields = ["lastName", "firstName", "overall", "age"];
  return allowedSortFields.includes(String(sortBy))
    ? String(sortBy)
    : "lastName";
}

export function validateOrder(order: string): "asc" | "desc" {
  return String(order)?.toLowerCase() === "desc" ? "desc" : "asc";
}