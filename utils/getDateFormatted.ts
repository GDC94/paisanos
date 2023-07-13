/**
 * @method  getDateFormatted
 * Convert a date from iso format or timestamp to date format
 *
 * @param dateFormat date in iso format
 * @param isTimestamp check if date is a timestamp format
 *
 * @returns date
 */

const getDateFormatted = (dateFormat: string, isTimestamp = false) => {
  const checkIfIsASingleNumber = (num: number) =>
    num.toString().length === 1 ? `0${num}` : num;

  if (
    !dateFormat ||
    dateFormat === undefined ||
    (dateFormat.length < 18 && !isTimestamp)
  ) {
    return { day: "-", time: "-" };
  }

  let isoDate: Date;
  if (isTimestamp) {
    const timestamp = Number(dateFormat);
    isoDate = new Date(timestamp * 1000);
  } else {
    const dateToIso = new Date(`${dateFormat}`).toISOString();
    const isIsoFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
    if (!isIsoFormat.test(dateToIso)) {
      return { day: "-", time: "-" };
    }

    isoDate = new Date(dateToIso);
  }

  const dateParams = [
    isoDate.getDate(),
    isoDate.getMonth() + 1,
    isoDate.getFullYear(),
    isoDate.getHours(),
    isoDate.getMinutes(),
    isoDate.getSeconds(),
  ];
  const formattedDate = dateParams.map((date) => checkIfIsASingleNumber(date));
  const dateElements = {
    date: formattedDate?.[0],
    month: formattedDate?.[1],
    year: formattedDate?.[2],
    hours: formattedDate?.[3],
    minutes: formattedDate?.[4],
    seconds: formattedDate?.[5],
  };

  const finalDate = {
    day: `${dateElements.date}/${dateElements.month}/${dateElements.year}`,
    time: `${dateElements.hours}:${dateElements.minutes}:${dateElements.seconds}`,
  };

  if (
    !finalDate.day ||
    !finalDate.time ||
    finalDate.day.toString() === "NaN" ||
    finalDate.time.toString() === "NaN"
  )
    return { day: "-", time: "-" };
  return { day: finalDate.day, time: finalDate.time };
};

export default getDateFormatted;
