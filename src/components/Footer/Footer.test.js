import React from 'react';
import {shallow} from 'enzyme';
import {findTagsWithTestAttribute} from '../../../testUtils';
import Footer from './Footer';

it('renders without errors', () => {
  const wrapper = shallow(<Footer />);
  expect(findTagsWithTestAttribute(wrapper, 'component-Footer').length).toBe(1);
});
