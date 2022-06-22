export const convertMinsToHrsMins = (minutes: number) => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;

  return hour + 'h ' + minute + 'm';
};
