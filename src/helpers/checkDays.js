import { formatDate } from "./formatDate";
import moment from "moment";

const checkUnavailableDays = (unavailableDays, day) => {
  let isBlocked = false;

  unavailableDays.forEach(item => {
    item.forEach(item => {
      const myDate = formatDate(item);
      if (myDate === day) {
        isBlocked = true;
      }
    })
  });

  return isBlocked
}

const checkAvailableDays = (days, day) => {
  let result = true;
  days.forEach(item => {
    const date = moment(day, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    const startDate = moment(item[0], 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    const endDate = moment(item[1], 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');

    if((date.isBefore(endDate) && date.isAfter(startDate)) || (date.isSame(startDate) || date.isSame(endDate))) {
      result = false;
    }
  });

  return result;

}

const hasBlockedInTheRange = (start, end, unavailableDays) => {
  const dateFormat = 'DD/MM/YYYY';
  const diff = moment(end).diff(start, 'days') + 1;
  let hasBlocked = false

  for (let i = 0; i < diff; i++) {
    const checkDate = moment(start).add(i, 'd').format(dateFormat);
    const resultCheck = checkUnavailableDays(unavailableDays, checkDate);

    if(resultCheck) hasBlocked = true;
  }

  return hasBlocked;
}

export {checkUnavailableDays, checkAvailableDays, hasBlockedInTheRange}