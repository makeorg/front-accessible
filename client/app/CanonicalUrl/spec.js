import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-head';
import { CanonicalUrl } from '.';

// mock useLocation hook
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: () => ({
    pathname: '/Fr-fr/fooUrl/fooSelection',
    search: '?query=queryFoo&utm=utmFoo',
  }),
}));

describe('CanonicalUrl', () => {
  const wrapper = shallow(<CanonicalUrl />);

  it('must return a Link component', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('must return pathname and search query only', () => {
    expect(wrapper.find(Link).prop('href')).toBe(
      'https://make.org/Fr-fr/fooUrl/fooSelection?query=queryFoo'
    );
  });
});
