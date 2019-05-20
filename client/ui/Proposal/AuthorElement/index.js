import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Author } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { TextColors } from 'Client/app/assets/vars/Colors';
import {
  AuthorInfosStyle,
  AuthorSeparatorStyle,
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
  withAvatar: boolean,
};

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return (
    <React.Fragment>
      <span>,&nbsp;</span>
      <span>{i18n.t('proposal_card.author.age', { age })}</span>
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
    withStatus,
    formattedProposalStatus,
  } = props;

  return (
    <React.Fragment>
      <AuthorInfosStyle withAvatar={withAvatar}>
        {withAvatar && (
          <React.Fragment>
            <Avatar>
              {author.avatarUrl && <img src={author.avatarUrl} alt="" />}
            </Avatar>
            &nbsp;
          </React.Fragment>
        )}
        {author.organisationName ? (
          <React.Fragment>
            <RedLinkStyle
              href={getOrganisationProfileLink(
                country,
                language,
                author.organisationSlug
              )}
            >
              {author.organisationName}
            </RedLinkStyle>
            &nbsp;
            <SvgCheckedSymbol
              style={{ fontSize: '14px', fill: TextColors.Blue }}
            />
          </React.Fragment>
        ) : (
          author.firstName
        )}
        <ProposalAuthorAge age={author.age} />
        {!!createdAt && (
          <React.Fragment>
            <AuthorSeparatorStyle aria-hidden>&bull;</AuthorSeparatorStyle>
            <span>{DateHelper.creationDateFormat(createdAt)}</span>
          </React.Fragment>
        )}
      </AuthorInfosStyle>
      {withStatus && (
        <ProposalStatusStyle className={`status-${formattedProposalStatus}`}>
          {i18n.t(`proposal_card.status.${formattedProposalStatus}`)}
        </ProposalStatusStyle>
      )}
    </React.Fragment>
  );
};

ProposalAuthorElement.defaultProps = {
  withAvatar: false,
  withStatus: false,
  formattedProposalStatus: undefined,
};
