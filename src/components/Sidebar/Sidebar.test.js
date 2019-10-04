import React from 'react';
import {shallow} from 'enzyme';
import {findTagsWithTestAttribute} from '../../../testUtils';
import Sidebar from './Sidebar';

it('renders without errors', () => {
  const wrapper = shallow(<Sidebar />);
  expect(findTagsWithTestAttribute(wrapper, 'component-Sidebar').length).toBe(
    1
  );
});
