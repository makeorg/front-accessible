/* @flow */

import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { getBaitText } from 'Shared/constants/proposal';
import { ProposalSubmitButtonComponent } from './Button';
import {
  ProposalSubmitFormStyle,
  ProposalInputWrapperStyle,
  ProposalLabelStyle,
  ProposalInputStyle,
  ProposalButtonWrapperStyle,
  ProposalCharLimitStyle,
} from './Styled';

type Props = {
  /** Value's content */
  content: string,
  /** Value's lentgh */
  length: number,
  /** Can user submit value */
  canSubmit: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called when field's value changes */
  handleOnChange: (SyntheticEvent<*>) => void,
  /** Method called when field is focused */
  handleOnFocus: () => void,
  /** Method called when field is blured */
  handleOnBlur: () => void,
  /** Method called when field's value is submitted */
  handleOnSubmit: (SyntheticEvent<*>) => void,
  /** Boolean used to expand / collapse proposal field */
  isFieldExpanded: boolean,
};
/**
 * Render the Proposal Field
 */
export const ProposalSubmitFormComponent = (props: Props) => {
  const {
    content,
    length,
    canSubmit,
    isPannelOpen,
    isFieldExpanded,
    handleOnChange,
    handleOnFocus,
    handleOnSubmit,
    handleOnBlur,
  } = props;

  return (
    <ProposalSubmitFormStyle isFieldExpanded={isFieldExpanded}>
      <HiddenItemStyle aria-hidden as="h2">
        {i18n.t('proposal_submit.title')}
      </HiddenItemStyle>
      <ProposalInputWrapperStyle>
        <ProposalLabelStyle htmlFor="proposal">
          {getBaitText()}
        </ProposalLabelStyle>
        <ProposalInputStyle
          as="textarea"
          name="proposal"
          id="proposal"
          value={content}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          autoCapitalize="none"
          autoComplete="off"
          spellCheck
          maxLength="140"
          tabIndex={isPannelOpen ? -1 : 0}
          isFieldExpanded={isFieldExpanded}
        />
      </ProposalInputWrapperStyle>
      <ProposalButtonWrapperStyle isFieldExpanded={isFieldExpanded}>
        <ProposalCharLimitStyle>
          <span aria-valuetext={length}>{length}</span>
          <HiddenItemStyle aria-hidden>
            {i18n.t('proposal_submit.entred_chars')}
          </HiddenItemStyle>
          /
          <HiddenItemStyle aria-hidden>{i18n.t('common.from')}</HiddenItemStyle>
          <span aria-valuemax="140">140</span>
          <HiddenItemStyle aria-hidden>
            {i18n.t('proposal_submit.available_chars')}
          </HiddenItemStyle>
        </ProposalCharLimitStyle>
        <ProposalSubmitButtonComponent
          handleOnSubmit={handleOnSubmit}
          canSubmit={canSubmit}
          isPannelOpen={isPannelOpen}
          isFieldExpanded={isFieldExpanded}
        />
      </ProposalButtonWrapperStyle>
    </ProposalSubmitFormStyle>
  );
};
