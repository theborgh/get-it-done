import React from 'react';
import {shallow} from 'enzyme';
import {findTagsWithTestAttribute} from '../../../testUtils';
import TaskArea from './TaskArea';

it('renders without errors', () => {
  const wrapper = shallow(<TaskArea />);
  expect(findTagsWithTestAttribute(wrapper, 'component-TaskArea').length).toBe(
    1
  );
});
