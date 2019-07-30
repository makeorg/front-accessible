// @flow
import React, { useEffect, useRef } from 'react';
import { i18n } from 'Shared/i18n';
import { SvgCheck } from 'Client/ui/Svg/elements';
import {
  FormSuccessMessageStyle,
  FormSuccessSvgStyle,
} from '../Styled/Success';

export const FormSuccessMessage = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.focus();
    }
  }, [messageRef]);

  return (
    <FormSuccessMessageStyle ref={messageRef} tabIndex={0}>
      <SvgCheck style={FormSuccessSvgStyle} />
      {i18n.t('common.form.messages.submit_success')}
    </FormSuccessMessageStyle>
  );
};
