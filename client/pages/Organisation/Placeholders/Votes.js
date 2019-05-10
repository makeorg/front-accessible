import React from 'react';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  ThumbsUpStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';

type Props = {
  name: string,
};

export const OrganisationVotesPlaceholder = (props: Props) => {
  const { name } = props;
  return (
    <React.Fragment>
      <SvgThumbsUp aria-hidden style={ThumbsUpStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('organisation.votes.text', {
          name,
        })}
      </PlaceholderParagraphStyle>
    </React.Fragment>
  );
};
