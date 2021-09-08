export const getDays = (month: number): number[] => {
  let days = [];
  let daysInMonth = 0;

  switch (month) {
    case 2:
      daysInMonth = 28;
      break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      daysInMonth = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      daysInMonth = 30;
      break;
  }

  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  return days;
};
