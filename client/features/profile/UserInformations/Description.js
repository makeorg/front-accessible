import React from 'react';
import { i18n } from 'Shared/i18n';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  ProfileDescriptionStyle,
  ProfileCollapseWrapperStyle,
  ProfileCollapseSeparatorStyle,
  ProfileCollapseButtonStyle,
  ProfileSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';

type Props = {
  description: string,
};

type State = {
  isCollapsed: boolean,
  isMobile: boolean,
};

export class UserDescription extends React.Component<Props, State> {
  state = {
    isCollapsed: false,
    isMobile: false,
  };

  componentDidMount() {
    this.setResponsiveRendering();
    window.addEventListener('resize', this.setResponsiveRendering);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setResponsiveRendering);
  }

  setResponsiveRendering = () => {
    const isMobile = window.matchMedia(
      `(max-width: ${intToPx(Breakpoints.Tablet)}`
    ).matches;

    if (isMobile) {
      this.setState({ isCollapsed: true, isMobile: true });
    }
  };

  toggleCollapse = () => {
    this.setState(prevState => ({
      ...prevState,
      isCollapsed: !prevState.isCollapsed,
    }));
  };

  render() {
    const { description } = this.props;
    const { isCollapsed, isMobile } = this.state;
    const renderCollapseTrigger = description.length > 150 && isMobile;

    return (
      <React.Fragment>
        <ProfileDescriptionStyle isCollapsed={isCollapsed}>
          {description}
        </ProfileDescriptionStyle>
        {renderCollapseTrigger ? (
          <ProfileCollapseWrapperStyle>
            <ProfileCollapseSeparatorStyle isCollapsed={isCollapsed} />
            <ProfileCollapseButtonStyle onClick={this.toggleCollapse}>
              {isCollapsed
                ? i18n.t('profile.informations_update.more')
                : i18n.t('profile.informations_update.less')}
            </ProfileCollapseButtonStyle>
          </ProfileCollapseWrapperStyle>
        ) : (
          <ProfileSeparatorStyle />
        )}
      </React.Fragment>
    );
  }
}
