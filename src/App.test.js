import React from 'react';
import {shallow} from 'enzyme';
import {findTagsWithTestAttribute} from '../testUtils';
import App from './App';

it('renders without errors', () => {
  const wrapper = shallow(<App />);
  expect(findTagsWithTestAttribute(wrapper, 'component-App').length).toBe(1);
});
