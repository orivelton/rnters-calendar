import React, { useEffect, useState } from 'react';
import './App.scss';
import apiGet from './api/api';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

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
  
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
