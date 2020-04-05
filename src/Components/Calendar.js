import React, { useState, useEffect } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import ErrorMessage from './ErrorMessage';
import { hasBlockedInTheRange, checkAvailableDays } from '../helpers/checkDays';
import apiGet from '../api/api';
import updateLocale from '../helpers/updateLocale';

const Calendar = () => {
  updateLocale();
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
    const { 
      unavailable_periods: unavailableDays,
      available_periods: availablePeriods 
    } = calendar;

    return checkAvailableDays(availablePeriods, day);
  }


  const isDayHighlighted = () => {

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
        onPrevMonthClick={(date) => {}}
        onNextMonthClick={(date) => {}}
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
        isDayBlocked={(day) => isDayBlocked(day)}
        isDayHighlighted={() => true}
        //isOutsideRange={() => true}
      />
      
      {
        unavailable && <ErrorMessage message={'Desculpe :( Não é possivel adicionar intervalos com dias bloqueados'} />
      }
    </>
  )
};

export default Calendar;