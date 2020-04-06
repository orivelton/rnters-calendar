import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import ErrorMessage from './ErrorMessage';
import { hasBlockedInTheRange, checkAvailableDays } from '../helpers/checkDays';
import apiGet from '../api/api';
import updateLocale from '../helpers/updateLocale';
import moment from 'moment';

const Calendar = () => {
  updateLocale();
  
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const [calendar, setCalendar] = useState([]);
  const [currentMonth, setcurrentMonth] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGet(currentMonth);
      const {data: { attributes }} = result;
      attributes && setCalendar(attributes);
    };
    currentMonth >= moment().month() && fetchData();
   }, [currentMonth]);

  const isDayBlocked = day => {
    const { available_periods: availablePeriods } = calendar;
    return checkAvailableDays(availablePeriods, day);
  }

  const onPrevMonthClick = () => { setcurrentMonth(currentMonth -1)};
  const onNextMonthClick = () => { setcurrentMonth(currentMonth +1)};
  


  const isDayHighlighted = day => {
    const { confirmed_inquiries: confirmedInquiries } = calendar;
    return !checkAvailableDays(confirmedInquiries, day);
  }

  const handleErrorRange = () => {
    setUnavailable(true);
    setStartDate(null);
    setEndDate(null);
  }
  
  return (
    <>
      <p>Escolha as datas</p>
      <DateRangePicker
        noBorder
        regular
        withPortal
        startDate={startDate}
        endDate={endDate}
        startDateId="1"
        endDateId="2"
        startDatePlaceholderText={'Início'}
        endDatePlaceholderText={'Fim'}
        onDatesChange={({ startDate, endDate }) => {
          setUnavailable(false);
          const { unavailable_periods: unavailableDays } = calendar;

          if(hasBlockedInTheRange(startDate, endDate, unavailableDays)) {
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
        isDayHighlighted={day => isDayHighlighted(day)}
        isDayBlocked={day => isDayBlocked(day)}
        onPrevMonthClick={onPrevMonthClick}
        onNextMonthClick={onNextMonthClick}
        onClose={() => {setcurrentMonth(moment().month())}}
      />
      {
        unavailable && <ErrorMessage message={'Desculpe :( Não é possivel adicionar intervalos com dias bloqueados'} />
      }
    </>
  )
};

export default Calendar;