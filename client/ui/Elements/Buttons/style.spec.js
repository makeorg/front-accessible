import React from 'react';
import renderer from 'react-test-renderer';
import {
  ButtonsWrapperStyle,
  UnstyledButtonStyle,
  ActiveButtonStyle,
  RedButtonStyle,
  WhiteButtonStyle,
  GreyButtonStyle,
  SmallRedButtonStyle,
  SmallGreyButtonStyle,
  RedLinkButtonStyle,
  CloseButtonStyle,
  QualifyButtonStyle,
  VoteIconStyle,
  VoteButtonStyle,
  ProposalIconStyle,
  EmailIconStyle,
  ClappingIconStyle,
  SignOutIconStyle,
  PencilIconStyle,
  AngleArrowLeftIconStyle,
  ThumbsUpIconStyle,
  PlayIconStyle,
  ForwardIconStyle,
  LockIconStyle,
  UserIconStyle,
  ChildIconStyle,
  MapMarkerIconStyle,
  SuitcaseIconStyle,
  PaperPlaneIconStyle,
  SaveFileIconStyle,
  LinkIconStyle,
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

  describe('WhiteButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<WhiteButtonStyle />).toJSON();
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

  describe('RedLinkButtonStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<RedLinkButtonStyle />).toJSON();
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

  describe('ProposalIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ProposalIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('EmailIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<EmailIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ClappingIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ClappingIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('SignOutIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<SignOutIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('PencilIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<PencilIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('AngleArrowLeftIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<AngleArrowLeftIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ThumbsUpIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ThumbsUpIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('PlayIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<PlayIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ForwardIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ForwardIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('LockIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<LockIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('UserIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<UserIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('ChildIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<ChildIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('MapMarkerIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<MapMarkerIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('SuitcaseIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<SuitcaseIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('PaperPlaneIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<PaperPlaneIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('SaveFileIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<SaveFileIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });

  describe('LinkIconStyle', () => {
    it('snapshot by default', () => {
      const component = renderer.create(<LinkIconStyle />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
