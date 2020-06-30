import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Pagination } from './index';
import { PaginationWrapperStyle } from './style';

describe('Pagination', () => {
  it('Renders PaginationStyle', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find(PaginationWrapperStyle)).toHaveLength(1);
  });
  it('snapshot by default', () => {
    const component = renderer.create(<Pagination />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
