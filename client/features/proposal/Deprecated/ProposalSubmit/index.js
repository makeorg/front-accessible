/* @flow */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { throttle } from 'Shared/helpers/throttle';
import {
  getProposalLength,
  proposalHasValidLength,
} from 'Shared/helpers/proposal';
import { selectAuthentication } from 'Shared/store/selectors/user.selector';
import { proposeSuccess } from 'Shared/store/actions/proposal';
import {
  trackDisplayProposalSubmitValidation,
  trackClickProposalSubmit,
  trackClickModerationLink,
} from 'Shared/services/Tracking';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ProposalService } from 'Shared/services/Proposal';
import { type StateRoot } from 'Shared/store/types';
import { DeprecatedProposalSubmitAuthentication } from './Authentication';
import { DeprecatedProposalSubmitForm } from './Form';
import { DeprecatedProposalSubmitSuccess } from './Success';
import { DeprecatedProposalSubmitDescription } from './Description';

type Props = {
  /** Boolean to check if proposal submit can be expanded */
  canBeOpen?: boolean,
  /** Method to handle when proposal submit is focused */
  handleFocus?: () => void,
};

/**
 * Handles Proposal Submit Business Logic
 */

export const DeprecatedProposalSubmit = ({
  canBeOpen = true,
  handleFocus = () => {},
}: Props) => {
  /** Content of the proposal */
  const [content, setContent] = useState<string>('');
  /** Length of the proposal */
  const [length, setLength] = useState<number>(getProposalLength());
  /** Boolean toggled when user is typing a proposal */
  const [isTyping, setIsTyping] = useState<boolean>(false);
  /** Boolean toggled when user is submitting a proposal */
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  /** Boolean toggled when proposal is submitted successfully */
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  /** Handle Redux state */
  const { isLoggedIn } = useSelector((state: StateRoot) =>
    selectAuthentication(state)
  );
  const question = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const dispatch = useDispatch();

  /** Handle Propose API call */
  const handleSuccessResponse = () => {
    dispatch(proposeSuccess());
    setIsSuccess(true);
    setContent('');
    setLength(getProposalLength());
    trackDisplayProposalSubmitValidation();
  };

  const handleErrorResponse = () => {
    setIsSuccess(false);
  };

  const handleProposeAPICall = () => {
    if (isLoggedIn && proposalHasValidLength(length)) {
      ProposalService.deprecatedPropose(
        content,
        question.questionId,
        handleSuccessResponse,
        handleErrorResponse
      );
    }
  };

  const handleOnChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
    setLength(getProposalLength(event.currentTarget.value));
  };

  const handleOnFocus = () => {
    setIsTyping(true);
    setIsSubmitted(false);
    setIsSuccess(false);

    handleFocus();
  };

  const handleOnKeydown = (
    event: SyntheticKeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  /** Handle actions when form is submitted */
  const handleOnSubmit = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setIsTyping(false);
    setIsSubmitted(true);

    if (!canBeOpen) handleFocus();

    trackClickProposalSubmit();
    handleProposeAPICall();
  };

  /** Handle Propose API Call when user log  */
  useEffect(() => {
    handleProposeAPICall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const isDescriptionShown = canBeOpen && isTyping && !isSubmitted;
  const isAuthenticationShown = canBeOpen && isSubmitted && !isLoggedIn;
  const isSuccessShown = canBeOpen && isSuccess;
  const isOpen = isDescriptionShown || isAuthenticationShown;
  return (
    <>
      <DeprecatedProposalSubmitForm
        key="DeprecatedProposalSubmitForm"
        content={content}
        length={length}
        canSubmit={proposalHasValidLength(length)}
        isOpen={isOpen}
        handleOnChange={handleOnChange}
        handleOnSubmit={throttle(handleOnSubmit)}
        handleOnFocus={handleOnFocus}
        handleOnKeydown={handleOnKeydown}
      />
      {isDescriptionShown ? (
        <DeprecatedProposalSubmitDescription
          trackModerationLink={() => trackClickModerationLink()}
        />
      ) : null}
      {isSuccessShown ? (
        <DeprecatedProposalSubmitSuccess key="DeprecatedProposalSubmitSuccess" />
      ) : null}
      {isAuthenticationShown ? (
        <DeprecatedProposalSubmitAuthentication key="DeprecatedProposalSubmitAuthenticationContainer" />
      ) : null}
    </>
  );
};
