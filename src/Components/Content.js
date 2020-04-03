import React from 'react';
import Card from './Card';
import Rent from './Rent';

const Content = () => {
  return (
    <div class="item__detail item__detail_long">
      <div class="row item_page_row">
        <Card />
        <Rent />
      </div>
    </div>
  );
};

export default Content;
