import moment from "moment";

const formatDate = (date) => moment(date).format('DD/MM/YYYY');

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

export { formatDate, checkUnavailableDays };