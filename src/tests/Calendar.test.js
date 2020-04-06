import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from '../Components/Calendar';

it('Renders correctly', () => {
  const tree = renderer.create(<Calendar />).toJSON();
  expect(tree).toMatchSnapshot();
});
