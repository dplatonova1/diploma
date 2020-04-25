export function dateConverter(date) {
  return new Date(date)
    .toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(/\s*г\./, "");
}

export function dateToDays(date) {
  const newDate = new Date(date);
  const day = new Intl.DateTimeFormat("ru-RU", { day: "numeric" }).format(
    newDate
  );
  const weekday = new Intl.DateTimeFormat("ru-RU", { weekday: "short" }).format(
    newDate
  );
  return `${day}, ${weekday}`;
}

