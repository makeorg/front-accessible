import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { postPersonnalityComments } from 'Shared/services/Personality';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import { setEmptyStringToNull } from 'Shared/helpers/form';
import {
  CommitmentPreviewSeparatorStyle,
  CommitmentPreviewBoxStyle,
  CommitmentPreviewDislaimerStyle,
  CommitmentPreviewOpinionsIconWrapperStyle,
  CommitmentPreviewParagraphStyle,
  CommitmentPreviewButtonsWrapperStyle,
  CommitmentPreviewConfirmStyle,
  CommitmentPreviewCancelStyle,
  CommitmentPreviewOpinionsParagraphStyle,
} from './style';

type Props = {
  userId: string,
  topIdeaId: string,
  vote: string,
  qualification: string[],
  firstComment: string,
  secondComment: string,
  thirdComment: string,
  handleCancel: () => void,
  preview: boolean,
};

export const CommitmentPreview = ({
  userId,
  topIdeaId,
  vote,
  qualification,
  firstComment,
  secondComment,
  thirdComment,
  handleCancel,
  preview,
}: Props) => {
  const [isOpinionSent, sendOpinion] = useState(false);
  const comment1 = firstComment.trim();
  const comment2 = secondComment.trim();
  const comment3 = thirdComment.trim();
  const postOpinion = async () => {
    const comment = await postPersonnalityComments(
      userId,
      topIdeaId,
      setEmptyStringToNull(comment1),
      setEmptyStringToNull(comment2),
      setEmptyStringToNull(comment3),
      vote,
      qualification
    );
    if (comment) {
      sendOpinion(true);
    }
  };

  return (
    <>
      <CommitmentPreviewSeparatorStyle />
      <FlexElementStyle>
        <CommitmentPreviewOpinionsIconWrapperStyle
          transform={opinionsVoteStaticParams[vote].transform}
          color={opinionsVoteStaticParams[vote].color}
        >
          <SvgThumbsUp aria-hidden />
        </CommitmentPreviewOpinionsIconWrapperStyle>
        <CommitmentPreviewOpinionsParagraphStyle
          color={opinionsVoteStaticParams[vote].color}
          dangerouslySetInnerHTML={{
            __html: qualification
              ? i18n.t(`personality.opinions.preview.${vote}_${qualification}`)
              : i18n.t(`personality.opinions.preview.${vote}`),
          }}
        />
      </FlexElementStyle>

      {comment1 && (
        <CommitmentPreviewBoxStyle>{comment1}</CommitmentPreviewBoxStyle>
      )}
      {comment2 && (
        <CommitmentPreviewBoxStyle>{comment2}</CommitmentPreviewBoxStyle>
      )}
      {comment3 && (
        <CommitmentPreviewBoxStyle>{comment3}</CommitmentPreviewBoxStyle>
      )}
      {preview && !isOpinionSent && (
        <CommitmentPreviewDislaimerStyle>
          <CommitmentPreviewParagraphStyle>
            {i18n.t('personality.opinions.form.disclaimer')}
          </CommitmentPreviewParagraphStyle>
          <CommitmentPreviewButtonsWrapperStyle>
            <CommitmentPreviewCancelStyle onClick={handleCancel}>
              {i18n.t('personality.opinions.form.preview_cancel')}
            </CommitmentPreviewCancelStyle>
            <CommitmentPreviewConfirmStyle onClick={postOpinion}>
              {i18n.t('personality.opinions.form.preview_confirm')}
            </CommitmentPreviewConfirmStyle>
          </CommitmentPreviewButtonsWrapperStyle>
        </CommitmentPreviewDislaimerStyle>
      )}
    </>
  );
};
