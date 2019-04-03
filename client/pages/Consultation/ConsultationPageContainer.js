import React from 'react';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import { type TabsContent } from 'Shared/types/tabs';
import { Tracking } from 'Shared/services/Tracking';
import { ConsultationTabContent } from 'Client/features/consultation/TabsContent/Tab/Consultation';
import { ConsultationPanelContent } from 'Client/features/consultation/TabsContent/Panel/Consultation';
import { i18n } from 'Shared/i18n';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

type State = {
  selectedTagIds: string[],
};

export class ConsultationPageContainer extends React.Component<Props, State> {
  state = {
    selectedTagIds: [],
  };

  componentDidMount() {
    Tracking.trackDisplayConsultation();
  }

  /** Todo: export to function and Test logic */
  handleSelectTag = async tagId => {
    const { selectedTagIds } = this.state;
    const foundTagId = selectedTagIds.includes(tagId);
    const newSelectedTagIds = foundTagId
      ? selectedTagIds.filter(selectedTagId => selectedTagId !== tagId)
      : [tagId, ...selectedTagIds];

    this.setState({
      selectedTagIds: newSelectedTagIds,
    });
  };

  trackPresentationCollpase = (action: string) => {
    Tracking.trackOpenLearnMore(action);
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const { selectedTagIds } = this.state;

    const tabsContent: TabsContent[] = [
      {
        tab: <ConsultationTabContent question={question} />,
        panel: (
          <ConsultationPanelContent
            question={question}
            questionConfiguration={questionConfiguration}
            selectedTagIds={selectedTagIds}
            handleSelectTag={this.handleSelectTag}
            trackPresentationCollpase={this.trackPresentationCollpase}
          />
        ),
      },
      {
        tab: `${i18n.t('consultation.tabs.action')}`,
        panel: undefined,
        isDisabled: true,
      },
    ];

    return (
      <ConsultationPageComponent
        question={question}
        questionConfiguration={questionConfiguration}
        tabsContent={tabsContent}
      />
    );
  }
}
