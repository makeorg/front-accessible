// @ flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import RegisterBackground from 'Client/app/assets/images/search_register.jpg';
import { IconWrapperStyle } from 'Client/ui/Elements/Buttons/style';
import { SearchSidebarTileStyle } from '../Styled';
import { SeachRegisterButtonStyle } from './Styled';

export const SearchRegister = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentification(state)
  );

  if (isLoggedIn) {
    return null;
  }

  return (
    <SearchSidebarTileStyle image={RegisterBackground}>
      <FourthLevelTitleStyle>
        {i18n.t('search.sidebar.register.title')}
      </FourthLevelTitleStyle>
      <SeachRegisterButtonStyle onClick={() => dispatch(modalShowRegister())}>
        <IconWrapperStyle aria-hidden>
          <SvgThumbsUp />
        </IconWrapperStyle>
        {i18n.t('common.register_label')}
      </SeachRegisterButtonStyle>
    </SearchSidebarTileStyle>
  );
};
