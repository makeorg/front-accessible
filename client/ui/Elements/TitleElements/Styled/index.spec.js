import React from 'react';
import renderer from 'react-test-renderer';
import {
  SecondLevelTitleStyle,
  ThirdLevelTtitleStyle,
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
  describe('ThirdLevelTtitleStyle', () => {
    it('snapshot by default', () => {
      const component = renderer
        .create(<ThirdLevelTtitleStyle>H3</ThirdLevelTtitleStyle>)
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
