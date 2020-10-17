export const parseDate = (date: string): Date => {
  const [day, month, year] = date
    .split("/")
    .map((item: string) => Number.parseInt(item));
  return new Date(year, month, day);
};
