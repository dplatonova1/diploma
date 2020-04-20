export function dateConverter(date) {
  return new Date(date)
    .toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(/\s*г\./, "");
}
