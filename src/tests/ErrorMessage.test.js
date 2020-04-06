import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from '../Components/ErrorMessage';

test('renders correctly', () => {
  const tree = renderer.create(<ErrorMessage />).toJSON();
  expect(tree).toMatchSnapshot();
});
