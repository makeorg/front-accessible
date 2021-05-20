// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import { type StateRoot } from 'Shared/store/types';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { matchMobileDevice } from 'Shared/helpers/styled';
import { useSelector } from 'react-redux';
import { DATE_CAPITALIZE_LL_FORMAT } from 'Shared/constants/date';
import {
  AuthorDescriptionStyle,
  AuthorInfosStyle,
  ProposalStatusStyle,
} from './Styled';
import { ProposalAuthorInformations } from '../Author';

type Props = {
  /** Object with author's properties */
  proposal: ProposalType,
  /** Include avatar */
  withAvatar?: boolean,
  /** Include creation date */
  withCreationDate?: boolean,
  /** Include formatted proposal status */
  formattedProposalStatus?: string,
  /** Specifc design for sequence avatar */
  isSequence?: boolean,
};

export const DeprecatedProposalAuthor = ({
  proposal,
  withAvatar = false,
  withCreationDate = false,
  formattedProposalStatus = false,
  isSequence = false,
}: Props) => {
  const { author } = proposal;
  const { device } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = matchMobileDevice(device);
  return (
    <AuthorDescriptionStyle>
      <AuthorInfosStyle as="div" isSequence={isSequence}>
        {withAvatar && (
          <>
            {isSequence && (
              <Avatar
                avatarUrl={author.avatarUrl}
                isSequence={isSequence}
                avatarSize={isMobile ? 30 : 50}
              />
            )}
            {!isSequence && <Avatar avatarUrl={author.avatarUrl} />}
          </>
        )}
        <ProposalAuthorInformations
          proposal={proposal}
          isSequence={isSequence}
        />
        {withCreationDate && !!proposal.createdAt && (
          <>
            &nbsp;&bull;&nbsp;
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.author.date')}
            </ScreenReaderItemStyle>
            <time dateTime={proposal.createdAt}>
              {DateHelper.localizedAndFormattedDate(
                proposal.createdAt,
                DATE_CAPITALIZE_LL_FORMAT
              )}
            </time>
          </>
        )}
      </AuthorInfosStyle>
      {formattedProposalStatus && (
        <ProposalStatusStyle className={`status-${formattedProposalStatus}`}>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.status.title')}
          </ScreenReaderItemStyle>
          {i18n.t(`proposal_card.status.${formattedProposalStatus}`)}
        </ProposalStatusStyle>
      )}
    </AuthorDescriptionStyle>
  );
};
