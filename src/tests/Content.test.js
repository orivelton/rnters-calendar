import React from 'react';
import renderer from 'react-test-renderer';
import Content from '../Components/Content';

it('Renders correctly', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});
