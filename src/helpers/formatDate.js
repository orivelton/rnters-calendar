import moment from "moment";

const formatDate = (date) => moment(date).format('DD/MM/YYYY');
const formatStartDateToApi = (date) => moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
const formatEndDateToApi = (date) => moment(date).format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');

export { formatDate, formatStartDateToApi,formatEndDateToApi };