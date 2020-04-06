import React from 'react';
import renderer from 'react-test-renderer';
import Rent from '../Components/Rent';

test('renders correctly', () => {
  const tree = renderer.create(<Rent />).toJSON();
  expect(tree).toMatchSnapshot();
});
