import React from 'react';
import renderer from 'react-test-renderer';
import {
  SecondLevelTitleStyle,
  ThirdLevelTitleStyle,
  FourthLevelTitleStyle,
} from '.';

describe('TitleElements', () => {
  describe('SecondLevelTitleStyle', () => {
    it('snapshot by default', () => {
      const component = renderer
        .create(<SecondLevelTitleStyle>H2</SecondLevelTitleStyle>)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
  describe('ThirdLevelTitleStyle', () => {
    it('snapshot by default', () => {
      const component = renderer
        .create(<ThirdLevelTitleStyle>H3</ThirdLevelTitleStyle>)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
  describe('FourthLevelTitleStyle', () => {
    it('snapshot by default', () => {
      const component = renderer
        .create(<FourthLevelTitleStyle>H4</FourthLevelTitleStyle>)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
