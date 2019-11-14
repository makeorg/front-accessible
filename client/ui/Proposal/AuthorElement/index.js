// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Author } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import {
  AuthorDescriptionStyle,
  AuthorInfosStyle,
  ProposalStatusStyle,
} from './Styled';

type Props = {
  /** Object with author's properties */
  author: Author,
  /** Country of the proposal */
  country: string,
  /** Language of the proposal */
  language: string,
  /** Date of creation of proposal */
  createdAt?: string,
  /** Include avatar */
  withAvatar?: boolean,
  /** Include creation date */
  withCreationDate?: boolean,
  /** Include formatted proposal status */
  formattedProposalStatus?: string,
};

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return (
    <React.Fragment>
      {`, ${i18n.t('proposal_card.author.age', { age })}`}
    </React.Fragment>
  );
};

export const ProposalAuthorElement = (props: Props) => {
  const {
    author,
    country,
    language,
    createdAt,
    withAvatar,
    withCreationDate,
    formattedProposalStatus,
  } = props;

  return (
    <AuthorDescriptionStyle>
      <AuthorInfosStyle as="div">
        {withAvatar && (
          <React.Fragment>
            <Avatar avatarUrl={author.avatarUrl} />
            <React.Fragment> </React.Fragment>
          </React.Fragment>
        )}
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.author.from')}
        </ScreenReaderItemStyle>
        {author.organisationName ? (
          <React.Fragment>
            <RedLinkStyle
              onClick={trackClickPublicProfile}
              to={getOrganisationProfileLink(
                country,
                language,
                author.organisationSlug
              )}
            >
              {author.organisationName}
            </RedLinkStyle>
            <SvgCheckedSymbol
              style={{
                fontSize: '14px',
                marginLeft: '5px',
                fill: TextColors.Blue,
              }}
            />
          </React.Fragment>
        ) : (
          author.firstName
        )}
        <ProposalAuthorAge age={author.age} />
        {withCreationDate && !!createdAt && (
          <React.Fragment>
            &nbsp;&bull;&nbsp;
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.author.date')}
            </ScreenReaderItemStyle>
            <time dateTime={createdAt}>
              {DateHelper.creationDateFormat(createdAt)}
            </time>
          </React.Fragment>
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

ProposalAuthorElement.defaultProps = {
  withAvatar: false,
  withCreationDate: false,
  formattedProposalStatus: undefined,
};
