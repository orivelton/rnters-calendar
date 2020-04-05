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
    let isBlocked = false;
    const dayCalendar = formatDate(day);
    const { unavailable_periods: unavailableDays } = calendar;
    

    unavailableDays.forEach(item => {
      item.forEach(item => {
        const myDate = formatDate(item);
        if (myDate === dayCalendar) {
          isBlocked = true;
        }
      })
    });

    return isBlocked;
   }


  return (
    <>
      <DateRangePicker
        noBorder
        withPortal
        startDate={startDate}
        endDate={endDate}
        startDateId="1"
        endDateId="2"
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