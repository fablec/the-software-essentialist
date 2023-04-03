const getMinutes = (str: string) => {
  const match = str.match(/^(\d{2}):(\d{2})$/);
  if (!match) return [false, 0];
  return [true, Number(match[1]) * 60 + Number(match[2])];
};

export const isValidMilitaryRange = (str: string): boolean => {
  if (!/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/.test(str)) return false;
  const [isOk1, time1] = getMinutes(str.split(" - ")[0]);
  const [isOk2, time2] = getMinutes(str.split(" - ")[1]);
  if ((isOk1 || isOk2) === false) return false;
  if (time1 > time2) return false;
  if (time1 > 24 * 60 || time2 > 24 * 60) return false;
  return true;
};
