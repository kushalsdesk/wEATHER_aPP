const getTime = (timezone_offset) => {
  // Define the UTC timezone offset in seconds
  let utcOffsetSeconds = timezone_offset; // Example: UTC+01:00

  // Create a new Date object with the current UTC time
  let utcDate = new Date();

  // Get the current local time in milliseconds
  let localTimeMilliseconds =
    utcDate.getTime() + utcDate.getTimezoneOffset() * 60 * 1000;

  // Calculate the local timezone offset in milliseconds
  let localOffsetMilliseconds = utcOffsetSeconds * 1000;

  // Calculate the target local time in milliseconds
  let targetTimeMilliseconds = localTimeMilliseconds + localOffsetMilliseconds;

  // Create a new Date object with the target local time
  let targetDate = new Date(targetTimeMilliseconds);

  // Get the local time format with AM/PM indication
  let localTime = targetDate.toLocaleString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return localTime;
};

export default getTime;
