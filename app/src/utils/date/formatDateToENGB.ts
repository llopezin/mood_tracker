function formatDateToENGB(timestamp: string | number): string {
  const date = new Date(Number(timestamp));
  return new Intl.DateTimeFormat("en-GB").format(new Date(date));
}

export default formatDateToENGB;
