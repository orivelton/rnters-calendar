import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import DateFormated from './DateFormated';
import apiGet from '../api/api';
import moment from 'moment';

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
     const { unavailable_periods: unavailableDays } = calendar
      console.log(unavailableDays);
      return unavailableDays.some((unavailableDay) => moment(unavailableDay).isSame(day, 'day'));
      //return unavailablePeriods.some(date.)
   }


  return (
    <>
      <DateRangePicker
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
        displayFormat="MM/DD/YYYY"
        numberOfMonths={1}
        isDayBlocked={(day) =>  isDayBlocked(day)}
      />
      <DateFormated date={startDate} />
      <DateFormated date={endDate} />
    </>
  )
};

export default Calendar;