import React from 'react';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  LightBulbStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';

type Props = {
  name: string,
};

export const OrganisationProposalsPlaceholder = (props: Props) => {
  const { name } = props;
  return (
    <React.Fragment>
      <SvgLightBulb aria-hidden style={LightBulbStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('organisation.proposals.text', {
          name,
        })}
      </PlaceholderParagraphStyle>
    </React.Fragment>
  );
};
