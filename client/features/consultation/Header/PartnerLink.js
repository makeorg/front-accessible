import React from 'react';
import { useSelector } from 'react-redux';
import { orderPartnersByWeight } from 'Shared/helpers/question';
import {
  getOrganisationProfileLink,
  getPartnerAnchor,
} from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { trackSeeMorePartners } from 'Shared/services/Tracking';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type PartnerType } from 'Shared/types/question';
import { NewWindowLink } from './Link';
import {
  HeaderListWrapperStyle,
  HeaderListLabelStyle,
  HeaderListStyle,
  HeaderListItemStyle,
  PartnerLinkStyle,
  PartnerStyle,
} from './style';

type Props = {
  partnersList: PartnerType[],
  title: string,
  seeMoreLink?: boolean,
  noMargin?: boolean,
};

export const PartnersList = ({
  partnersList,
  title,
  seeMoreLink = false,
  noMargin = false,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );

  const displayMoreLink = seeMoreLink && partnersList.length > 2;

  return (
    <HeaderListWrapperStyle className={noMargin && 'no-margin'}>
      <HeaderListLabelStyle>
        {title}
        <> </>
      </HeaderListLabelStyle>
      <HeaderListStyle>
        {partnersList.sort(orderPartnersByWeight).map((partner, index) => (
          <HeaderListItemStyle key={partner.name}>
            {partner.organisation ? (
              <PartnerLinkStyle
                to={getOrganisationProfileLink(
                  country,
                  partner.organisation.slug
                )}
              >
                {partner.name}
              </PartnerLinkStyle>
            ) : (
              <PartnerStyle key={partner.name}>{partner.name}</PartnerStyle>
            )}
            {partnersList.length !== index + 1 && <>, </>}
          </HeaderListItemStyle>
        ))}
        {displayMoreLink && (
          <HeaderListItemStyle>
            <>, ... </>
            <NewWindowLink
              linkUrl={getPartnerAnchor(question.aboutUrl)}
              linkText={i18n.t('consultation.partners.commitment_link')}
              tracking={() => trackSeeMorePartners()}
            />
          </HeaderListItemStyle>
        )}
      </HeaderListStyle>
    </HeaderListWrapperStyle>
  );
};
