/**
 * @method  parseTimeString
 *
 * @param timeString string date adapted by getDateFormatted util
 *
 * @returns an object wit hours, mins and secs
 */
const parseTimeString = (timeString: string) => {
  const [hoursStr, minsStr, secsStr] = timeString.split(":");

  const hours = hoursStr.toString();
  const mins = minsStr.toString();
  const secs = secsStr.toString();

  return { hours, mins, secs };
};

export default parseTimeString;
