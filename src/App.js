import React, { useEffect, useState } from 'react';
import './App.scss';
import apiGet from './api/api';

const App = () => {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGet();
      const {data: { attributes }} = result;
      setCalendar(attributes);
    };

    fetchData();
  }, []);

  const { available_periods, confirmed_inquiries, unavailable_periods } = calendar;
  
  return (
    <div className="calendar">
      <h1>Calendar</h1>
      {console.log('>>>>>', calendar)}
      {calendar.length && console.log('>>>>>>>', available_periods)}
    </div>
  );
}

export default App;
