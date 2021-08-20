export const getYears = (): number[] => {
  let years = [];
  for (let i = new Date().getFullYear() - 18; i >= 1980; i--) years.push(i);
  return years;
};
