export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-gb", {
    // year: "numeric",
    // month: "long",
    // day: "numeric",
  });
}
