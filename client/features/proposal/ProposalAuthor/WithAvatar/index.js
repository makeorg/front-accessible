import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Avatar } from 'Client/ui/Avatar';
import { type Author } from 'Shared/types/proposal';
import { DateHelper } from 'Shared/helpers/date';
import { AuthorWithAvatarStyle } from '../Styled';

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
    <span>
      {', '}
      {i18n.t('proposal_card.author.age', { age })}
    </span>
  );
};

export const ProposalAuthorWithAvatar = (props: Props) => {
  const { author, createdAt } = props;

  return (
    <AuthorWithAvatarStyle>
      <Avatar>
        {author.avatarUrl && <img src={author.avatarUrl} alt="" />}
      </Avatar>
      {author.firstName}
      <ProposalAuthorAge age={author.age} />
      {!!createdAt && (
        <span>
          {' · '}
          {DateHelper.proposalCreationDateFormat(createdAt)}
        </span>
      )}
    </AuthorWithAvatarStyle>
  );
};
