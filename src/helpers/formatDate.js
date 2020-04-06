import moment from "moment";

const formatDate = (date) => moment(date).format('DD/MM/YYYY');
const formatDateToApi = (date) => moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
const formatAvailableDays = (date) => moment(date, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');

export { formatDate, formatDateToApi, formatAvailableDays };