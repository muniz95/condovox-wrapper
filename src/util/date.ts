export const parseDate = (date: string): Date => {
    const splitDate = date.split("/").map((item: string) => Number.parseInt(item));
    return new Date(splitDate[2], splitDate[1], splitDate[0]);
};
