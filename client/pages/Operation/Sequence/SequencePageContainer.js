import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { type Question } from 'Shared/types/question';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { sequenceStart } from 'Shared/store/actions/sequence';
import { SequencePageComponent } from './SequencePageComponent';

type Props = {
  question: Question,
};

const BaseSequencePageContainer = ({ question }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    trackDisplaySequence();
    dispatch(sequenceStart(question.slug));
  }, []);

  return <SequencePageComponent question={question} />;
};

export const SequencePageContainer = withDepartmentCheck(
  BaseSequencePageContainer
);
