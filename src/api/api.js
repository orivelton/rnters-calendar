import urlApi from './urls';
import moment from 'moment';
import { formatStartDateToApi, formatEndDateToApi } from '../helpers/formatDate';
import axios from 'axios';

export const apiGet = async (currentMonth) => {
  const { urlCalendar } = urlApi;
  const { start, end } = getCurrentRangeDate(currentMonth)
  const url = urlCalendar + `start_at=${start}&end_at=${end}&interval=true`;
  const result = await axios.get(url);
  const { data } = result;
  return await data;
};

const getCurrentRangeDate = (currentMonth = moment().month()) => {
  const startDate = moment().month(currentMonth).startOf('month');
  const start = startDate.isBefore(moment()) ? formatStartDateToApi(moment()) : formatStartDateToApi(startDate);
  const end = formatEndDateToApi(moment().month(currentMonth).endOf('month'));

  return { start, end };
}

export default apiGet;
