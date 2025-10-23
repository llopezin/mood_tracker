function formatDateToENGBLong(timestamp: string | number): string {
  const date = new Date(Number(timestamp));
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default formatDateToENGBLong;
