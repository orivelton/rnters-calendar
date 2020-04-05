import urlApi from './urls';

export const apiGet = async () => {
  const { urlCalendar } = urlApi;
  const params = `start_at=2020/05/01&end_at=2020/05/30&interval=true`
  const data = await fetch(urlCalendar);
  return await data.json()
};

export default apiGet;
