import React from 'react';
import Moment from 'react-moment';

const DateFormated = ({ date }) => {
  console.log(date);
  return (

    <Moment format="MM/DD/YYYY">{date}</Moment>
  )
};

export default DateFormated;
