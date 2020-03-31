import React from 'react';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/style';
import {
  ActionsFourthLevelTitleStyle,
  ActionsParagraphStyle,
} from 'Client/features/consultation/Styled/Actions';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Method called to render Register Component in Modal */
  handleRegisterModal: () => void,
};

export const RegisterTileContent = (props: Props) => {
  const { handleRegisterModal } = props;
  return (
    <React.Fragment>
      <ActionsFourthLevelTitleStyle>
        {i18n.t('actions.register.title')}
      </ActionsFourthLevelTitleStyle>
      <ActionsParagraphStyle>
        {i18n.t('actions.register.text')}
      </ActionsParagraphStyle>
      <RedButtonStyle onClick={handleRegisterModal}>
        {i18n.t('actions.register.button')}
      </RedButtonStyle>
    </React.Fragment>
  );
};
