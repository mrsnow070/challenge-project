export function substactDaysFromDate(days) {
  const date = new Date();
  date.setDate(date.getDate() - days);

  return date.toISOString();
}
