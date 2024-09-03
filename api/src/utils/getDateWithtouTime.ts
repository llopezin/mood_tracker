export const getDateWithoutTime = (date: Date) => {
  return date.toISOString().slice(0, 10);
};
