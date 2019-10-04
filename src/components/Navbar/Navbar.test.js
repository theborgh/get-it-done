import React from 'react';
import {shallow} from 'enzyme';
import {findTagsWithTestAttribute} from '../../../testUtils';
import Navbar from './Navbar';

describe('renders', () => {
  const wrapper = shallow(<Navbar />);
  it('renders without errors', () => {
    expect(findTagsWithTestAttribute(wrapper, 'component-Navbar').length).toBe(
      1
    );
  });

  it('renders at least one link', () => {
    expect(
      findTagsWithTestAttribute(wrapper, 'component-Link').length
    ).toBeGreaterThan(0);
  });
});
