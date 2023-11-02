export const isDaytime = (
  sunrise: string | undefined,
  sunset: string | undefined
): boolean => {
  if (!sunrise || !sunset) {
    // Handle the case where sunrise or sunset data is not available
    return false;
  }

  const now = new Date();
  const sunriseTime = new Date(sunrise);
  const sunsetTime = new Date(sunset);

  return now >= sunriseTime && now <= sunsetTime;
};
