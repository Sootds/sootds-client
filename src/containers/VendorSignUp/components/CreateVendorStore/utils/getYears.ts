export const getYears = (): number[] => {
  let years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i <= currentYear + 10; i++) years.push(i);
  return years;
};
