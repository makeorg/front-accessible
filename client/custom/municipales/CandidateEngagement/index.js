// @flow
import React, { useEffect, useState } from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type StateRoot } from 'Shared/store/types';
import { type TypePersonality } from 'Shared/types/user';
import { useDispatch, useSelector } from 'react-redux';
import { fechQuestionPersonalities } from 'Shared/store/reducers/questions/actions';

type Props = {
  question: TypeQuestion,
};

export const CandidateEngagement = ({ question }: Props) => {
  const [personalities, setPersonalities] = useState(null);
  const dispatch = useDispatch();
  const personalitiesState: TypePersonality[] = useSelector(
    (state: StateRoot) => state.questions[question.slug].personalities
  );

  useEffect(() => {
    setPersonalities(personalitiesState);
  }, [personalitiesState]);

  useEffect(() => {
    dispatch(fechQuestionPersonalities(question.questionId, question.slug));
  }, [question]);

  if (!personalities) {
    return null;
  }

  return (
    <ul>
      {personalities.map(personality => (
        <li>{`${personality.firstName} ${personality.lastName}`}</li>
      ))}
    </ul>
  );
};
