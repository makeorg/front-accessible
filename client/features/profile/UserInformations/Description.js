import React, { useEffect, useState } from 'react';
import { i18n } from 'Shared/i18n';
import {
  ProfileDescriptionStyle,
  ProfileCollapseWrapperStyle,
  ProfileCollapseSeparatorStyle,
  ProfileCollapseButtonStyle,
  ProfileSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { useMobile } from 'Client/hooks/useMedia';

type Props = {
  description: string,
};

export const UserDescription = ({ description }: Props) => {
  const [isCollapsed, setCollapse] = useState(false);
  const isMobile = useMobile();
  const renderCollapseTrigger = description.length > 280 && isMobile;

  useEffect(() => {
    if (isMobile) {
      setCollapse(true);
    }
  }, [isMobile]);

  return (
    <>
      <ProfileDescriptionStyle isCollapsed={isCollapsed}>
        {description}
      </ProfileDescriptionStyle>
      {renderCollapseTrigger ? (
        <ProfileCollapseWrapperStyle>
          <ProfileCollapseSeparatorStyle isCollapsed={isCollapsed} />
          <ProfileCollapseButtonStyle onClick={() => setCollapse(!isCollapsed)}>
            {isCollapsed
              ? i18n.t('profile.informations_update.more')
              : i18n.t('profile.informations_update.less')}
          </ProfileCollapseButtonStyle>
        </ProfileCollapseWrapperStyle>
      ) : (
        <ProfileSeparatorStyle />
      )}
    </>
  );
};
