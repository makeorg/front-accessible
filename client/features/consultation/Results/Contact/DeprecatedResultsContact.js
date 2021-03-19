// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { CONTACT_EMAIL } from 'Shared/constants/config';
import { type QuestionType, type ReportsType } from 'Shared/types/question';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { trackDownloadReport } from 'Shared/services/Tracking';
import { ResultsDownloadItemStyle, ResultsDownloadButtonStyle } from './style';

type Props = {
  question: QuestionType,
  reports: ?(ReportsType[]),
};
export const DeprecatedResultsContact = ({ question, reports }: Props) => {
  if (!reports) {
    const mailToHref = `mailto:${CONTACT_EMAIL}?subject=${i18n.t(
      'consultation.results.download.deprecated_email_object'
    )} - ${question.question}`;

    return (
      <ParagraphStyle>
        {i18n.t('consultation.results.download.deprecated_contact', {
          mail: CONTACT_EMAIL,
        })}
        <a className="red-link" href={mailToHref}>
          {CONTACT_EMAIL}
        </a>
      </ParagraphStyle>
    );
  }

  return (
    <UnstyledListStyle>
      {reports.map(report => (
        <ResultsDownloadItemStyle as="li" key={report.type}>
          <ParagraphStyle as="span">
            {i18n.t('consultation.results.download.type', {
              extension: report.type,
              weight: report.size,
            })}
          </ParagraphStyle>
          <ResultsDownloadButtonStyle
            as="a"
            href={report.path}
            download={question.slug}
            onClick={() => trackDownloadReport(report.type)}
          >
            {i18n.t('consultation.results.download.button')}
          </ResultsDownloadButtonStyle>
        </ResultsDownloadItemStyle>
      ))}
    </UnstyledListStyle>
  );
};
