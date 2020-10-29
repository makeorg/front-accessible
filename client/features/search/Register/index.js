// @ flow
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import RegisterBackground from 'Client/app/assets/images/search_register.jpg';
import { ThumbsUpIconStyle } from 'Client/ui/Elements/Buttons/style';
import { SearchSidebarTileStyle } from '../Styled';
import { SeachRegisterButtonStyle } from './Styled';

export const SearchRegister = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );

  if (isLoggedIn) {
    return null;
  }

  return (
    <SearchSidebarTileStyle image={RegisterBackground}>
      <FourthLevelTitleStyle as="h3">
        {i18n.t('search.sidebar.register.title')}
      </FourthLevelTitleStyle>
      <SeachRegisterButtonStyle onClick={() => dispatch(modalShowRegister())}>
        <ThumbsUpIconStyle aria-hidden focusable="false" />
        {i18n.t('common.register_label')}
      </SeachRegisterButtonStyle>
    </SearchSidebarTileStyle>
  );
};
