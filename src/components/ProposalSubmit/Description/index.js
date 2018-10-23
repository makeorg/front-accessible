import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { DescriptionWrapper } from '../Styled';
import { Description, AltDescription, DescriptionLink } from '../../Elements/DescriptionElements';
import { IconInButton } from '../../Elements/ButtonElements';

const ProposalSubmitDescriptionComponent = ({ isPannelOpen }) => (
  <DescriptionWrapper>
    <Description>
      Ne vous inquiétez pas, nous corrigerons vos éventuelles fautes d&apos;orthographe.
    </Description>
    <AltDescription>
      {' Pour en savoir plus sur notre charte de modération, '}
      <DescriptionLink
        target="_blank"
        href="https://about.make.org/moderation"
        tabIndex={isPannelOpen ? -1 : 0}
      >
        {' cliquez ici '}
        <IconInButton>
          <FontAwesomeIcon aria-label="Ouverture dans un nouvel onglet" icon={faExternalLinkAlt} />
        </IconInButton>
      </DescriptionLink>
    </AltDescription>
  </DescriptionWrapper>
);

export default ProposalSubmitDescriptionComponent;
