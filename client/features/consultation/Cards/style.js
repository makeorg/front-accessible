import { color } from 'athena-design-tokens/dist/color';
import { typography } from 'athena-design-tokens/dist/typography';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { Elements } from 'Client/app/assets/vars/Elements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  LinkAsRedButtonStyle,
  RedButtonStyle,
} from 'Client/ui/Elements/Buttons/V2/style';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SvgExternalLink, SvgLock } from 'Client/ui/Svg/elements';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import styled from 'styled-components';

export const CardStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: ${color.white};
  border-radius: ${intToPx(Elements.BorderRadius)};
  padding: 30px;
  &.margin-bottom {
    margin-bottom: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    &.margin-bottom {
      margin-bottom: 30px;
    }
    &.desktop-half {
      width: 50%;
    }
    &.desktop-padding-left {
      margin-left: 15px;
    }
    &.desktop-padding-right {
      margin-right: 15px;
    }
  }
`;

export const CardTitleStyle = styled.h4`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: ${intToPx(typography.font.fontsize.L.value)};
  margin: 15px 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: ${intToPx(typography.font.fontsize.XL.value)};
    margin: 15px 0 20px;
  }
`;

export const CardAltTitleStyle = styled.h4`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: ${intToPx(typography.font.fontsize.S.value)};
  margin-bottom: 10px;
`;

export const CardDescriptionStyle = styled(ParagraphStyle)`
  margin-bottom: 20px;
`;

export const CardAltDescriptionStyle = styled(ParagraphStyle)`
  margin-bottom: 15px;
`;

export const CardButtonStyle = styled(RedButtonStyle)`
  align-self: flex-start;
`;

export const CardLinkAsButtonStyle = styled(LinkAsRedButtonStyle)`
  align-self: flex-start;
`;

export const CardLinkStyle = styled(Link)`
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.black};
`;

export const CardExternalLinkStyle = styled.a`
  display: flex;
  align-items: center;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.black};
`;

export const CardSoonStyle = styled(FlexElementStyle)`
  align-items: center;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  color: ${color.greyDark};
`;

export const CardSoonIconStyle = styled(SvgLock)`
  margin-right: 10px;
`;

export const CardExternalIconStyle = styled(SvgExternalLink)`
  width: 12px;
  height: 12px;
  margin-left: 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 14px;
    height: 14px;
  }
`;

export const MobileAboutStyle = styled.section`
  display: flex;
  flex-flow: column;
  padding: 30px 20px 0;
  background-color: ${color.white};
`;
