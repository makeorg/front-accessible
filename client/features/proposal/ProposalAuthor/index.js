import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type Author } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { AuthorInfosStyle } from './Styled';

type Props = {
  /** Object with author's properties */
  author: Author,
  createdAt?: string,
};

const ProposalAuthorAge = ({ age }) => {
  if (!age) {
    return null;
  }

  return (
    <React.Fragment>
      <span>, </span>
      <span>{i18n.t('proposal_card.author.age', { age })}</span>
    </React.Fragment>
  );
};

export const ProposalAuthor = (props: Props) => {
  const { author, createdAt } = props;

  return (
    <AuthorInfosStyle>
      {author.firstName}
      <ProposalAuthorAge age={author.age} />
      {!!createdAt && (
        <React.Fragment>
          <span aria-hidden>&nbsp;·&nbsp; </span>
          <span>{DateHelper.proposalCreationDateFormat(createdAt)}</span>
        </React.Fragment>
      )}
    </AuthorInfosStyle>
  );
};
