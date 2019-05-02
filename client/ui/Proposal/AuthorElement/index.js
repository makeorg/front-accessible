import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Author } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { Avatar } from 'Client/ui/Avatar';
import {
  AuthorInfosStyle,
  AuthorSeparatorStyle,
  ProposalStatusStyle,
} from './Styled';

type Props = {
  /** Object with author's properties */
  author: Author,
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
        {author.firstName || author.organisationName}
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
