export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/');

  const year = Number(dateParts[2]);
  const month = Number(dateParts[1]) - 1;
  const day = Number(dateParts[0]) + 1;

  return new Date(year, month, day);
};
