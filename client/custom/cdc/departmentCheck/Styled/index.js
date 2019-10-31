import styled from 'styled-components';
import ReactModal from 'react-modal';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, MakeThemeColors } from 'Client/app/assets/vars/Colors';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const DepartmentModalStyle = styled(ReactModal)`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow-y: auto;
  z-index: 2;
`;

export const DepartmentContentStyle = styled.section`
  width: 100%;
  background-color: ${BasicColors.PureWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  padding: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 30px;
  }
`;

export const DepartmentIntroductionStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${BasicColors.PureBlack};
  margin: 5px 0;
`;

export const DepartmentCancelStyle = styled(ParagraphStyle)`
  margin-top: 20px;
  color: ${BasicColors.PureWhite};
  text-align: center;
`;

export const DepartmentMapStyle = {
  margin: '40px 0',
};

export const DepartmentFormStyle = styled.form`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const DepartmentIconStyle = {
  fill: MakeThemeColors.Red,
  width: '16px',
  marginBottom: '2.5px',
};

export const DepartmentLabelStyle = styled.label`
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 11px;
  &#label_dep_22 {
    top: 30%;
    left: 43%;
  }
  &#label_dep_29 {
    top: 32%;
    left: 20%;
  }
  &#label_dep_35 {
    top: 38%;
    right: 0%;
  }
  &#label_dep_56 {
    bottom: 44%;
    left: 47%;
  }
  &.selected {
    text-decoration: underline;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 12px;
    &#label_dep_22 {
      top: 30%;
      left: 50%;
    }
    &#label_dep_29 {
      top: 35%;
      left: 25%;
    }
    &#label_dep_35 {
      top: 38%;
      right: 10%;
    }
    &#label_dep_56 {
      bottom: 43%;
      left: 51%;
    }
  }
`;

export const DepartmentHomeLinkStyle = styled(Link)`
  display: block;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;
