import React from 'react';
import Card from './Card';
import Rent from './Rent';

const Content = () => (
  <div className="item__detail item__detail_long">
    <div className="row item_page_row">
      <Card />
      <Rent />
    </div>
  </div>
);

export default Content;
