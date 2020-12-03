import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-head';
import { env } from 'Shared/env';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Hreflang } from '.';

jest.mock('Shared/env');
env.frontUrl.mockReturnValue('https://test.make.org');

// mock hooks
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useLocation: jest.fn(),
}));
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useLocationMock = pathname =>
  useLocation.mockImplementation(() => ({ pathname }));
const useSelectorMock = (country, countriesWithConsultations) =>
  useSelector.mockImplementation(selector =>
    selector({
      appConfig: {
        country,
        countriesWithConsultations,
      },
    })
  );

describe('Hreflang on home page', () => {
  beforeEach(() => {
    useLocationMock('/fr');
  });

  const cases = [
    {
      country: 'FR',
      countriesWithConsultations: ['FR', 'PT', 'GB'],
      expectedHreflang: [
        { language: 'fr-fr', href: 'https://test.make.org/FR' },
        { language: 'en-pt', href: 'https://test.make.org/PT' },
        { language: 'en-gb', href: 'https://test.make.org/GB' },
        { language: 'fr', href: 'https://test.make.org/FR' },
        { language: 'en', href: 'https://test.make.org/GB' },
        { language: 'x-default', href: 'https://test.make.org/FR' },
      ],
    },
    {
      country: 'BR',
      countriesWithConsultations: ['FR', 'PT', 'GB'],
      expectedHreflang: [
        { language: 'fr-fr', href: 'https://test.make.org/FR' },
        { language: 'en-pt', href: 'https://test.make.org/PT' },
        { language: 'en-gb', href: 'https://test.make.org/GB' },
        { language: 'fr', href: 'https://test.make.org/FR' },
        { language: 'en', href: 'https://test.make.org/GB' },
        { language: 'x-default', href: 'https://test.make.org/FR' },
      ],
    },
    {
      country: 'US',
      countriesWithConsultations: ['FR', 'IT', 'GB'],
      expectedHreflang: [
        { language: 'fr-fr', href: 'https://test.make.org/FR' },
        { language: 'en-it', href: 'https://test.make.org/IT' },
        { language: 'en-gb', href: 'https://test.make.org/GB' },
        { language: 'fr', href: 'https://test.make.org/FR' },
        { language: 'en', href: 'https://test.make.org/GB' },
        { language: 'x-default', href: 'https://test.make.org/FR' },
      ],
    },
  ];

  test.each(
    cases.map(item => [
      item.country,
      item.countriesWithConsultations,
      item.expectedHreflang.length,
    ])
  )(
    'Country: %s, countries with consultation: %s >>> Hreflang links expected: %s',
    (country, countriesWithConsultations, hreflangCount) => {
      useSelectorMock(country, countriesWithConsultations);
      const wrapper = shallow(<Hreflang />);
      expect(wrapper.find(Link)).toHaveLength(hreflangCount);
    }
  );

  test.each(
    cases
      .map(item =>
        item.expectedHreflang.map(hreflang => [
          item.country,
          item.countriesWithConsultations,
          hreflang.language,
          hreflang.href,
        ])
      )
      .flat()
  )(
    'Country: %s, countries with consultation: %s >>> Hreflang expected: %s, href expected: %s',
    (country, countriesWithConsultations, hreflang, href) => {
      useSelectorMock(country, countriesWithConsultations);
      const wrapper = shallow(<Hreflang />);
      expect(
        wrapper.find(
          `Link[hrefLang="${hreflang}"][rel="alternate"][href="${href}"]`
        )
      ).toHaveLength(1);
    }
  );
});

describe('Hreflang on internal page', () => {
  it('should not return hreflang links', () => {
    useLocationMock('/FR/browse/consultations/page/1');
    useSelectorMock('FR', ['FR', 'PT', 'GB']);
    const wrapper = shallow(<Hreflang />);
    expect(wrapper.find(Link)).toHaveLength(0);
  });
});
