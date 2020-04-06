import moment from "moment";
import { formatDate, formatAvailableDays } from "./formatDate";

const checkUnavailableDays = (unavailableDays, day) => {
  let isBlocked = false;

  unavailableDays.forEach(item => {
    item.forEach(item => {
      const myDate = formatDate(item);
      if (myDate === day) isBlocked = true;
    });
  });

  return isBlocked
}

const checkAvailableDays = (days, day) => {
  let result = true;
  days.forEach(item => {
    const [start, end] = item;
    const date = formatAvailableDays(day);
    const startDate = formatAvailableDays(start);
    const endDate = formatAvailableDays(end);

    if((date.isBefore(endDate) && date.isAfter(startDate)) || (date.isSame(startDate) || date.isSame(endDate))) {
      result = false;
    }
  });

  return result;
}

const hasBlockedInTheRange = (start, end, unavailableDays) => {
  const diff = moment(end).diff(start, 'days') + 1;
  let hasBlocked = false

  for (let i = 0; i < diff; i++) {
    const checkDate = moment(start).add(i, 'd').format('DD/MM/YYYY');
    const resultCheck = checkUnavailableDays(unavailableDays, checkDate);

    if(resultCheck) hasBlocked = true;
  }

  return hasBlocked;
}

export {checkUnavailableDays, checkAvailableDays, hasBlockedInTheRange}
