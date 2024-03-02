const dayToMiliseconds = 86400000;

export const nextDate = function (day: string) {
  return new Date(new Date(day).getTime() + dayToMiliseconds)
    .toISOString()
    .split('T')[0];
};
