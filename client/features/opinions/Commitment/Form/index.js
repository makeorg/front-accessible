import React from 'react';
import { i18n } from 'Shared/i18n';
import { TextArea } from 'Client/ui/Elements/Form/TextArea';
import { PERSONALITY_OPINION_FORMNAME } from 'Shared/constants/form';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  OpinionFormStyle,
  OpinionFormTitleStyle,
  OpinionAreaWrapperStyle,
  OpinionSubmitWrapperStyle,
} from './style';

type Props = {
  firstComment: string,
  secondComment: string,
  thirdComment: string,
  setFirstComment: () => void,
  setSecondComment: () => void,
  setThirdComment: () => void,
  handleSubmit: () => void,
};

export const CommitmentForm = ({
  firstComment,
  secondComment,
  thirdComment,
  setFirstComment,
  setSecondComment,
  setThirdComment,
  handleSubmit,
}: Props) => {
  const TEXTAREA_MIN_LENGTH = 2;
  const TEXTAREA_MAX_LENGTH = 280;
  const canSubmit =
    firstComment.length > TEXTAREA_MIN_LENGTH ||
    secondComment.length > TEXTAREA_MIN_LENGTH ||
    thirdComment.length > TEXTAREA_MIN_LENGTH;
  return (
    <OpinionFormStyle id={PERSONALITY_OPINION_FORMNAME} onSubmit={handleSubmit}>
      <OpinionFormTitleStyle>
        {i18n.t('personality.opinions.form.title')}
      </OpinionFormTitleStyle>
      <OpinionAreaWrapperStyle>
        <TextArea
          name="firstComment"
          label={i18n.t('personality.opinions.form.label')}
          value={firstComment}
          minLength={TEXTAREA_MIN_LENGTH}
          maxLength={TEXTAREA_MAX_LENGTH}
          handleChange={(event: SyntheticEvent<HTMLTextAreaElement>) =>
            setFirstComment(event.target.value)
          }
        />
      </OpinionAreaWrapperStyle>
      <OpinionAreaWrapperStyle>
        <TextArea
          name="secondComment"
          label={i18n.t('personality.opinions.form.label')}
          value={secondComment}
          minLength={TEXTAREA_MIN_LENGTH}
          maxLength={TEXTAREA_MAX_LENGTH}
          handleChange={(event: SyntheticEvent<HTMLTextAreaElement>) =>
            setSecondComment(event.target.value)
          }
        />
      </OpinionAreaWrapperStyle>
      <OpinionAreaWrapperStyle>
        <TextArea
          name="thirdComment"
          label={i18n.t('personality.opinions.form.label')}
          value={thirdComment}
          minLength={TEXTAREA_MIN_LENGTH}
          maxLength={TEXTAREA_MAX_LENGTH}
          handleChange={(event: SyntheticEvent<HTMLTextAreaElement>) =>
            setThirdComment(event.target.value)
          }
        />
      </OpinionAreaWrapperStyle>
      <OpinionSubmitWrapperStyle>
        <SubmitButton
          disabled={!canSubmit}
          formName={PERSONALITY_OPINION_FORMNAME}
          label={i18n.t('personality.opinions.form.validate')}
        />
      </OpinionSubmitWrapperStyle>
    </OpinionFormStyle>
  );
};
