export const getWeekDayString = (date: Date | string): string => {
    return typeof date === 'string'
      ? date
      : date.toLocaleDateString("en-US", { weekday: "long" });
  };
  
  export const getMonthString = (date: Date | string): string => {
    return typeof date === 'string'
      ? date
      : date.toLocaleDateString("en-US", { month: "long" });
  };

  export const getNumericDayString = (date: Date | string): string => {
    return typeof date === 'string'
      ? date
      : date.toLocaleDateString("en-US", { day: "numeric" });
  };

      