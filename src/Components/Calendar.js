import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import DateFormated from './DateFormated';
import apiGet from '../api/api';
import formatDate from '../helpers/formatDate';

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGet();
      const {data: { attributes }} = result;
      setCalendar(attributes);
    };
     fetchData();
   }, []);

   const isDayBlocked = day => {
    const dayCalendar = formatDate(day);
    const { unavailable_periods: unavailableDays } = calendar;
    const [...a] = unavailableDays;

    const result = a[0].filter((item) => {
      const itemDate = formatDate(item);
      if(itemDate === dayCalendar) {
        return item;
      }
    });
    console.log('>>>>>', dayCalendar)
    
    if(dayCalendar === '14/04/2020') {
      console.log('Ok');
      return true;
    }

    return false;
    
   }


  return (
    <>
      <DateRangePicker
        withPortal
        keepOpenOnDateSelect
        startDate={startDate}
        endDate={endDate}
        startDateId="your_unique_start_date_id"
        endDateId="your_unique_end_date_id"
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate)
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        displayFormat="DD/MM/YYYY"
        numberOfMonths={1}
        isDayBlocked={(day) =>  isDayBlocked(day)}
      />
      <DateFormated date={startDate} />
      <DateFormated date={endDate} />
    </>
  )
};

export default Calendar;