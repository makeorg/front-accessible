// @flow
import React from 'react';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { i18n } from 'Shared/i18n';
import {
  CardStyle,
  CardTitleStyle,
  CardDescriptionStyle,
  CardLinkStyle,
  CardSoonStyle,
  CardSoonIconStyle,
} from './style';

type Props = {
  icon: any,
  title: string,
  description: string,
  linkText: string,
  linkHref: string,
  classes?: string,
};

export const CTAProposal = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  classes = '',
}: Props) => {
  const isActive = false;

  return (
    <CardStyle className={classes}>
      <ColumnElementStyle>
        {icon}
        <CardTitleStyle>{title}</CardTitleStyle>
        <CardDescriptionStyle>{description}</CardDescriptionStyle>
      </ColumnElementStyle>
      {isActive ? (
        <CardLinkStyle to={linkHref}>{linkText}</CardLinkStyle>
      ) : (
        <CardSoonStyle>
          <CardSoonIconStyle
            width={16}
            height={16}
            aria-hidden
            focusable="false"
          />
          <> </>
          {i18n.t('consultation.cards.soon')}
        </CardSoonStyle>
      )}
    </CardStyle>
  );
};
