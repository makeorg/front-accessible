import React from 'react';
import renderer from 'react-test-renderer';
import {
  ButtonsWrapperStyle,
  UnstyledButtonStyle,
  ActiveButtonStyle,
  RedButtonStyle,
  GreyButtonStyle,
  SmallRedButtonStyle,
  SmallGreyButtonStyle,
  IconWrapperStyle,
  FacebookButtonStyle,
  GoogleButtonStyle,
  EmailButtonStyle,
  RedLinkButtonStyle,
  ButtonSmallWrapperStyle,
  CloseButtonStyle,
  QualifyButtonStyle,
  VoteIconStyle,
  VoteButtonStyle,
} from './style';

describe('ButtonElements/Styled', () => {
  describe('ButtonsWrapperStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ButtonsWrapperStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('UnstyledButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<UnstyledButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ActiveButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ActiveButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('RedButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<RedButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('GreyButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<GreyButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('SmallRedButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<SmallRedButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('SmallGreyButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<SmallGreyButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('IconWrapperStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<IconWrapperStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('FacebookButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<FacebookButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('GoogleButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<GoogleButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('EmailButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<EmailButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('RedLinkButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<RedLinkButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ButtonSmallWrapperStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ButtonSmallWrapperStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('CloseButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<CloseButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('QualifyButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<QualifyButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('VoteButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<VoteButtonStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('VoteIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<VoteIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
