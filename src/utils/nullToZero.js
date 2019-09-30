export const nullToZero = value => {
  if (value === null) return 0;
  if (value === undefined) return 0;
  return value;
};
