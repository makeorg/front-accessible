import React from 'react';
import { i18n } from 'Shared/i18n';
import { Tracking } from 'Shared/services/Tracking';
import { intToPx } from 'Shared/helpers/styled';
import { type Tag as TypeTag } from 'Shared/types/proposal';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { Presentation } from 'Client/features/consultation/Presentation';
import { Partners } from 'Client/features/consultation/Partners';
import { Sharing } from 'Client/features/sharing';
import { TagFilter } from 'Client/features/consultation/TagsFilter';
import { Collapse } from 'Client/ui/Elements/Collapse';
import { ParticipateBanner } from 'Client/features/consultation/ParticipateBanner';
import { InfiniteProposals } from 'Client/features/consultation/InfiniteProposals';
import { ConsultationProposal } from 'Client/features/consultation/Proposal';
import {
  ConsultationPageContentStyle,
  ConsultationPageSidebarStyle,
  ConsultationIconStyle,
} from 'Client/pages/Consultation/Styled';

import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { ConsultationPanelInnerStyle } from '../../Styled/Tabs';

type Props = {
  questionConfiguration: QuestionConfiguration,
  question: Question,
};

type State = {
  isMobile: boolean,
  selectedTagIds: string[],
};

export class ConsultationPanelContent extends React.Component<Props, State> {
  state = {
    isMobile: false,
    selectedTagIds: [],
  };

  componentDidMount() {
    this.setResponsiveRendering();
    window.addEventListener('resize', this.setResponsiveRendering);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setResponsiveRendering);
  }

  /** Todo: export to function and Test logic */
  handleSelectTag = async (tag: TypeTag) => {
    const { selectedTagIds } = this.state;
    const foundTagId = selectedTagIds.includes(tag.tagId);
    const newSelectedTagIds = foundTagId
      ? selectedTagIds.filter(selectedTagId => selectedTagId !== tag.tagId)
      : [tag.tagId, ...selectedTagIds];

    Tracking.trackTag(tag.label, foundTagId ? 'deselect' : 'select');

    this.setState({
      selectedTagIds: newSelectedTagIds,
    });
  };

  trackPresentationCollpase = (action: string) => {
    Tracking.trackOpenLearnMore(action);
  };

  setResponsiveRendering = () => {
    const isMobile = window.matchMedia(
      `(max-width: ${intToPx(Breakpoints.Tablet)}`
    ).matches;
    this.setState({ isMobile });
  };

  render() {
    const { questionConfiguration, question } = this.props;

    const { isMobile, selectedTagIds } = this.state;

    const renderMobileProposal = question.canPropose && isMobile;
    const renderDesktopProposal = question.canPropose && !isMobile;

    return (
      <ConsultationPanelInnerStyle>
        {renderMobileProposal && (
          <ConsultationProposal
            question={question}
            questionConfiguration={questionConfiguration}
          />
        )}
        <ConsultationPageSidebarStyle
          id="sidebar_content"
          as="aside"
          aria-label={i18n.t('common.sidebar_area')}
          bottomAffix={questionConfiguration.isGreatCause}
        >
          <Collapse
            title={i18n.t('consultation.presentation.title')}
            forceExpand
            trackCollapse={this.trackPresentationCollpase}
            questionId={question.questionId}
          >
            <Presentation />
          </Collapse>
          {questionConfiguration.isGreatCause && (
            <Collapse
              title={i18n.t('consultation.partners.intro_title')}
              forceExpand
            >
              <Partners
                questionConfiguration={questionConfiguration}
                question={question}
              />
            </Collapse>
          )}
          {!isMobile && (
            <TileWithTitle title={i18n.t('consultation.sharing.title')}>
              <Sharing />
            </TileWithTitle>
          )}
        </ConsultationPageSidebarStyle>
        <ConsultationPageContentStyle>
          {renderDesktopProposal && (
            <ConsultationProposal
              question={question}
              questionConfiguration={questionConfiguration}
            />
          )}
          <ParticipateBanner
            question={question}
            questionConfiguration={questionConfiguration}
          />
          <ThirdLevelTitleStyle id="tag_list">
            <ConsultationIconStyle>
              <SvgThumbsUp aria-hidden />
            </ConsultationIconStyle>
            {i18n.t('common.vote_on_proposals')}
          </ThirdLevelTitleStyle>
          <TagFilter
            question={question}
            handleSelectTag={this.handleSelectTag}
            selectedTagIds={selectedTagIds}
          />
          <InfiniteProposals question={question} tags={selectedTagIds} />
        </ConsultationPageContentStyle>
      </ConsultationPanelInnerStyle>
    );
  }
}
