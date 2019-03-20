import React from 'react';
import renderer from 'react-test-renderer';
import { RedButtonStyle, IconWrapperStyle, GreyButtonStyle } from '.';

describe('ButtonElements/Styled', () => {
  describe('RedButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<RedButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('IconWrapperStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<IconWrapperStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('GreyButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<GreyButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
