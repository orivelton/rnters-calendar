import urlApi from './urls';


export const apiGet = async () => {
  const { urlCalendar } = urlApi;
  const data = await fetch(urlCalendar);
  return await data.json()
};

export default apiGet;
