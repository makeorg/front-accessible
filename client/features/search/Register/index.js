// @ flow
import React from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { modalShowRegister } from 'Shared/store/actions/modal';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import RegisterBackground from 'Client/app/assets/images/search_register.jpg';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SearchSidebarTileStyle } from '../Styled';
import { SeachRegisterButtonStyle } from './Styled';

type Props = {
  /** User is login or not */
  isLoggedIn: boolean,
  /** Method called to render Register Component in Modal */
  handleRegisterModal: () => void,
};

const SearchRegisterComponent = ({
  isLoggedIn,
  handleRegisterModal,
}: Props) => {
  if (isLoggedIn) {
    return null;
  }

  return (
    <SearchSidebarTileStyle image={RegisterBackground}>
      <FourthLevelTitleStyle>
        {i18n.t('search.sidebar.register.title')}
      </FourthLevelTitleStyle>
      <SeachRegisterButtonStyle onClick={handleRegisterModal}>
        <IconWrapperStyle aria-hidden>
          <SvgThumbsUp aria-hidden />
        </IconWrapperStyle>
        {i18n.t('common.register_label')}
      </SeachRegisterButtonStyle>
    </SearchSidebarTileStyle>
  );
};

const mapStateToProps = state => {
  const { isLoggedIn } = selectAuthentification(state);

  return {
    isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRegisterModal: () => {
    dispatch(modalShowRegister());
  },
});

export const SearchRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRegisterComponent);
