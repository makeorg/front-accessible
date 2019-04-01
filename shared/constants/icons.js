import React from 'react';
import {
  SvgLock,
  SvgThumbsUp,
  SvgEnvelope,
  SvgUser,
  SvgChild,
  SvgMapMarker,
  SvgSuitcase,
  SvgPaperPlane,
  SvgThumbsDown,
  SvgThumbsLeft,
  SvgPencil,
} from 'Client/ui/Svg/elements';

/** Form Icons */
export const EmailFieldIcon = <SvgEnvelope />;
export const PasswordFieldIcon = <SvgLock />;
export const AgeFieldIcon = <SvgChild />;
export const FirstNameFieldIcon = <SvgUser />;
export const PostalCodeFieldIcon = <SvgMapMarker />;
export const JobFieldIcon = <SvgSuitcase />;
export const DescriptionFieldIcon = <SvgPencil />;
export const SubmitThumbsUpIcon = <SvgThumbsUp />;
export const SubmitPaperPlaneIcon = <SvgPaperPlane />;

/** Vote Button */
export const VoteAgreeIcon = <SvgThumbsUp />;
export const VoteDisagreeIcon = <SvgThumbsDown />;
export const VoteNeutralIcon = <SvgThumbsLeft />;
