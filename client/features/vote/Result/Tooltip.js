/* @flow */
import React from 'react';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Vote key's percentage */
  votePercent: number,
  /** Vote key */
  voteKey: string,
};

export const ResultTooltip = (props: Props) => {
  const { votePercent, voteKey } = props;

  return (
    <>
      <p>{i18n.t(`vote.${voteKey}`)}</p>
      <p>{i18n.t('common.percent', { percent: votePercent })}</p>
    </>
  );
};
