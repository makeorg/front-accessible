// @flow
import React from 'react';
import { useDispatch } from 'react-redux';
import { SvgMapMarker } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { RedLinkButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { modalShowDepartmentForm } from 'Shared/store/actions/modal';
import { ModificationWrapperStyle, ModificationIconStyle } from './Styled';

type Props = {
  departmentNumber: number,
};
export const DepartmentModification = ({ departmentNumber }: Props) => {
  const dispatch = useDispatch();

  return (
    <ModificationWrapperStyle>
      <ParagraphStyle as="span">
        <SvgMapMarker aria-hidden style={ModificationIconStyle} />
        {i18n.t(`modal.department_required.departments.${departmentNumber}`)}
      </ParagraphStyle>
      <RedLinkButtonStyle onClick={() => dispatch(modalShowDepartmentForm())}>
        {i18n.t(`modal.department_required.modification.button`)}
      </RedLinkButtonStyle>
    </ModificationWrapperStyle>
  );
};
