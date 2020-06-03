import styled from 'styled-components';
import {
  TextColors,
  BasicColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
// import { intToPx } from 'Shared/helpers/styled';
// import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  FlexElementStyle,
  SpaceBetweenColumnStyle,
} from '../../../ui/Elements/FlexElements';

const linkStyle = color => `
  color: ${color};
  font-size: 16px;
  &:hover,
  &:focus {
    color: ${color};
  }
`;

export const BrowseWrapperStyle = styled(FlexElementStyle)`
  flex-flow: row;
  flex-wrap: wrap;
`;

// review margins
export const BrowseElementStyle = styled(SpaceBetweenColumnStyle)`
  padding: 20px 0 px;
  margin-right: 30px;
  max-width: 254px;
  margin-top: 40px;
  margin-bottom: 30px;
`;

// to be changed when new endpoint search is done
// Alson, add media queries
export const BrowseElementPicture = styled.div`
  height: 254px;
  width: 248px;
  background-color: #d8d8d8;
`;

export const BrowseElementSubtitle = styled.div`
  font-size: 15px;
  text-transform: uppercase;
  color: ${TextColors.BlackWithOpacity};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  padding-top: 26px;
  padding-bottom: 6px;
`;

export const BrowseElementQuestion = styled.div`
  font-size: 18px;
  color: ${BasicColors.PureBlack};
  font-family: ${MakeFonts.CircularStandardBold};
  line-height: 1.44;
  padding-bottom: 20px;
`;

export const BrowseElementDateContainer = styled.div`
  display: flex;
  padding-bottom: 20px;
`;

export const SvgWrapperStyle = styled.span`
  margin-right: 12px;
  margin-bottom: 20px;
`;

export const BrowseElementDateStyle = styled.div`
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.BlackWithOpacity};
  max-width: 258px;
`;

export const BrowseRedLinkElementStyle = styled.a`
  ${linkStyle(MakeThemeColors.Red)};
  text-transform: uppercase;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
`;
