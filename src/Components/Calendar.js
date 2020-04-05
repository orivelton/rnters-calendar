import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import DateFormated from './DateFormated';
import ErrorMessage from './ErrorMessage';
import { formatDate, checkUnavailableDays } from '../helpers/formatDate';
import apiGet from '../api/api';

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [unavailable, setUnavailable] = useState(false);

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

    return checkUnavailableDays(unavailableDays, dayCalendar);
  }

  const hasBlockedInTheRange = (start, end) => {
    const dateFormat = 'DD/MM/YYYY';
    const diff = moment(end).diff(start, 'days') + 1;
    const { unavailable_periods: unavailableDays } = calendar;
    let hasBlocked = false

    for (let i = 0; i < diff; i++) {
      const checkDate = moment(start).add(i, 'd').format(dateFormat);
      const resultCheck = checkUnavailableDays(unavailableDays, checkDate);

      if(resultCheck) hasBlocked = true;
    }

    return hasBlocked;
  }

  const handleErrorRange = () => {
    setUnavailable(true);
    setStartDate(null);
    setEndDate(null);
  }
  
  return (
    <>
      <DateRangePicker
        noBorder
        regular
        withPortal
        startDate={startDate}
        endDate={endDate}
        startDateId="1"
        endDateId="2"
        onDatesChange={({ startDate, endDate }) => {
          setUnavailable(false);

          if(hasBlockedInTheRange(startDate, endDate)) {
            handleErrorRange();
          } else {
            setStartDate(startDate);
            setEndDate(endDate);
          }
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
        displayFormat="DD/MM/YYYY"
        numberOfMonths={1}
        isDayBlocked={(day) => isDayBlocked(day)}
      />
      
      {
        unavailable && <ErrorMessage message={'Selecione outra data! Temos agendamento para esse grupo de datas'} />
      }
      
      <DateFormated date={startDate} />
      <DateFormated date={endDate} />
    </>
  )
};

export default Calendar;