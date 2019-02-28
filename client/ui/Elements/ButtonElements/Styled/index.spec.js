import React from 'react';
import renderer from 'react-test-renderer';
import { RedButtonStyle, IconInButtonStyle, GreyButtonStyle } from '.';

describe('ButtonElements/Styled', () => {
  describe('RedButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<RedButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('IconInButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<IconInButtonStyle />).toJSON();
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
