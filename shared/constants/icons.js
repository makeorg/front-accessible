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
  SvgPencil,
  SvgSaveFileOption,
  SvgLink,
} from 'Client/ui/Svg/elements';

/** Form Icons */
export const EmailFieldIcon = <SvgEnvelope />;
export const PasswordFieldIcon = <SvgLock />;
export const AgeFieldIcon = <SvgChild />;
export const NameFiledIcon = <SvgUser />;
export const PostalCodeFieldIcon = <SvgMapMarker />;
export const WebsiteLinkFieldIcon = (
  <SvgLink style={{ width: '18px', height: '18px' }} />
);
export const JobFieldIcon = <SvgSuitcase />;
export const DescriptionFieldIcon = <SvgPencil />;
export const SubmitThumbsUpIcon = <SvgThumbsUp />;
export const SubmitPaperPlaneIcon = <SvgPaperPlane />;
export const SubmitSaveIcon = <SvgSaveFileOption />;
