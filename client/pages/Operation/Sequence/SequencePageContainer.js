import React from 'react';
import { type Question } from 'Shared/types/question';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { SequencePageComponent } from './SequencePageComponent';

type Props = {
  question: Question,
};

class BaseSequencePageContainer extends React.Component<Props> {
  componentDidMount() {
    trackDisplaySequence();
  }

  render() {
    const { question } = this.props;
    return <SequencePageComponent question={question} />;
  }
}

export const SequencePageContainer = withDepartmentCheck(
  BaseSequencePageContainer
);
