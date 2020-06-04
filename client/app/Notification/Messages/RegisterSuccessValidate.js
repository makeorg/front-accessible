// @flow
import { i18n } from 'Shared/i18n';

type Props = {
  replacements: Object,
};

export const RegisterSuccessValidateMessage = ({ replacements }: Props) =>
  i18n.t('common.notifications.register', {
    context: 'validate',
    ...replacements,
  });
