import React, {
  type MutableRefObject,
  useState,
  useRef,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SubmitButton } from 'Client/ui/Elements/Form/SubmitButton';
import {
  SvgBretagneMapMobile,
  SvgMapMarker,
  SvgBretagneMap,
  SvgClose,
} from 'Client/ui/Svg/elements';
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { modalClose } from 'Shared/store/actions/modal';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';
import { setCustomDataKey } from 'Shared/store/actions/customData';
import {
  CloseButtonStyle,
  UnstyledButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { trackClickCloseModal } from 'Shared/services/Tracking';
import { MODAL_DEPARTMENT } from 'Shared/constants/modal';
import { useLocation, matchPath } from 'react-router';
import { ROUTE_SEQUENCE } from 'Shared/routes';
import { fetchSequenceProposals } from 'Shared/store/actions/sequence';
import {
  DepartmentModalStyle,
  DepartmentContentStyle,
  DepartmentCancelStyle,
  DepartmentBackLinkStyle,
  DepartmentIntroductionStyle,
  DepartmentFormStyle,
  DepartmentMapStyle,
  DepartmentIconStyle,
  DepartmentLabelStyle,
} from './Styled';
import {
  trackDisplayDepartmentModal,
  trackDepartmentSelection,
  trackDepartmentModification,
  trackClickBackToHomepage,
} from '../Tracking';

const FORM_NAME = 'department_selection';
const BretagneDepartments = ['22', '29', '35', '56'];

type DepartmentItemProps = {
  departmentNumber: number,
  valueInState: number,
  updateDepartmentValue: () => {},
  updateMapPath: () => {},
};

const DepartmentItem = ({
  departmentNumber,
  valueInState,
  updateDepartmentValue,
  updateMapPath,
}: DepartmentItemProps) => {
  const departmentIsSelected = valueInState === departmentNumber;

  useEffect(() => {
    if (departmentIsSelected) {
      updateMapPath();
    }
  }, [!departmentIsSelected]);

  return (
    <DepartmentLabelStyle
      id={`label_dep_${departmentNumber}`}
      htmlFor={`radio_dep_${departmentNumber}`}
      className={departmentIsSelected ? 'selected' : ''}
      onFocus={updateDepartmentValue}
    >
      <SvgMapMarker style={DepartmentIconStyle} aria-hidden />
      <ScreenReaderItemStyle>
        <input
          type="radio"
          name="department"
          id={`radio_dep_${departmentNumber}`}
          checked={departmentIsSelected}
          value={departmentNumber}
          onChange={updateDepartmentValue}
        />
      </ScreenReaderItemStyle>
      {i18n.t(`modal.department_required.departments.${departmentNumber}`)}
    </DepartmentLabelStyle>
  );
};

export const DepartmentForm = () => {
  const isMobile = useMobile();
  const question = useSelector(
    state =>
      state.currentQuestion &&
      state.questions[state.currentQuestion] &&
      state.questions[state.currentQuestion].question
  );
  const initialDepartmentValue = useCustomDataSelector(DEPARTMENT_STORAGE_KEY);
  const dispatch = useDispatch();
  const setDepartment = (newDepartmentValue: number) => {
    dispatch(setCustomDataKey(DEPARTMENT_STORAGE_KEY, newDepartmentValue));
    dispatch(modalClose());
  };
  const mapWrapperRef = useRef();
  const [departmentValue, updateDepartmentValue] = useState(
    initialDepartmentValue
  );
  const [canSubmit, setCanSubmit] = useState(false);
  const location = useLocation();
  const sequenceRoute = matchPath(location.pathname, ROUTE_SEQUENCE);

  const selectDepartment = (value: number) => {
    updateDepartmentValue(value);
    setCanSubmit(true);
  };

  const selectMapPath = (value: number, ref: MutableRefObject<div>) => {
    const pathNodeList = ref.querySelectorAll('.department-path');
    const departmentsPath = Array.from(pathNodeList);
    const selectedDepartmentPath = ref.querySelector(`#path_dep_${value}`);

    departmentsPath.map(departmentPath =>
      departmentPath.setAttribute('fill-opacity', '0.05')
    );
    return selectedDepartmentPath.setAttribute('fill-opacity', '0.15');
  };

  const updateDepartment = (value: number, ref: MutableRefObject<div>) => {
    if (ref) {
      selectMapPath(value, ref);
    }

    return selectDepartment(value);
  };

  const handleCloseModal = () => {
    dispatch(modalClose());
    trackClickCloseModal(MODAL_DEPARTMENT);
  };

  const handleStartSequence = () => {
    if (!sequenceRoute && !sequenceRoute.isExact) {
      return null;
    }

    return dispatch(fetchSequenceProposals(question.questionId));
  };

  useEffect(() => {
    trackDisplayDepartmentModal();
  }, []);

  if (initialDepartmentValue) {
    return (
      <DepartmentModalStyle isOpen overlayClassName="modal-overlay">
        <DepartmentContentStyle>
          <SecondLevelTitleStyle>
            {i18n.t('modal.department_required.title')}
          </SecondLevelTitleStyle>
          <CloseButtonStyle
            aria-label={i18n.t('modal.close')}
            aria-expanded="false"
            onClick={handleCloseModal}
          >
            <SvgClose aria-hidden />
          </CloseButtonStyle>
          <ParagraphStyle>
            {i18n.t('modal.department_required.disclaimer.modify')}
          </ParagraphStyle>
          <ScreenReaderItemStyle as="p">
            <DepartmentBackLinkStyle
              as={UnstyledButtonStyle}
              onClick={handleCloseModal}
            >
              {i18n.t('modal.department_required.cancel.link_modify')}
            </DepartmentBackLinkStyle>
          </ScreenReaderItemStyle>
          <DepartmentFormStyle
            id={FORM_NAME}
            onSubmit={e => {
              e.preventDefault();
              setDepartment(departmentValue);
              trackDepartmentModification(departmentValue);
            }}
          >
            <ScreenReaderItemStyle>
              {i18n.t('modal.department_required.use_form')}
            </ScreenReaderItemStyle>
            <div ref={mapWrapperRef} aria-hidden>
              {isMobile ? (
                <SvgBretagneMapMobile style={DepartmentMapStyle} />
              ) : (
                <SvgBretagneMap aria-hidden style={DepartmentMapStyle} />
              )}
            </div>
            {BretagneDepartments.map(departmentNumber => (
              <DepartmentItem
                key={departmentNumber}
                departmentNumber={departmentNumber}
                valueInState={departmentValue}
                updateDepartmentValue={() =>
                  updateDepartment(departmentNumber, mapWrapperRef.current)
                }
                updateMapPath={() =>
                  selectMapPath(departmentValue, mapWrapperRef.current)
                }
              />
            ))}
            <SubmitButton
              formName={FORM_NAME}
              disabled={!canSubmit}
              label={i18n.t('modal.department_required.button_modify')}
            />
          </DepartmentFormStyle>
        </DepartmentContentStyle>
        <DepartmentCancelStyle aria-hidden>
          <DepartmentBackLinkStyle
            as={UnstyledButtonStyle}
            onClick={handleCloseModal}
          >
            {i18n.t('modal.department_required.cancel.link_modify')}
          </DepartmentBackLinkStyle>
        </DepartmentCancelStyle>
      </DepartmentModalStyle>
    );
  }

  return (
    <DepartmentModalStyle isOpen overlayClassName="modal-overlay">
      <DepartmentContentStyle>
        <SecondLevelTitleStyle>
          {i18n.t('modal.department_required.title')}
        </SecondLevelTitleStyle>
        <DepartmentIntroductionStyle>
          {i18n.t('modal.department_required.introduction.first')}
          <br />
          {i18n.t('modal.department_required.introduction.second')}
        </DepartmentIntroductionStyle>

        <ParagraphStyle>
          {i18n.t('modal.department_required.disclaimer.first')}
          <br />
          {i18n.t('modal.department_required.disclaimer.second')}
        </ParagraphStyle>
        <ScreenReaderItemStyle as="p">
          {i18n.t('modal.department_required.cancel.text')}
          <DepartmentBackLinkStyle to="/" onClick={trackClickBackToHomepage}>
            {i18n.t('modal.department_required.cancel.link')}
          </DepartmentBackLinkStyle>
        </ScreenReaderItemStyle>
        <DepartmentFormStyle
          id={FORM_NAME}
          onSubmit={e => {
            e.preventDefault();
            setDepartment(departmentValue);
            trackDepartmentSelection(departmentValue);
            handleStartSequence();
          }}
        >
          <ScreenReaderItemStyle>
            {i18n.t('modal.department_required.use_form')}
          </ScreenReaderItemStyle>
          <div ref={mapWrapperRef} aria-hidden>
            {isMobile ? (
              <SvgBretagneMapMobile style={DepartmentMapStyle} />
            ) : (
              <SvgBretagneMap aria-hidden style={DepartmentMapStyle} />
            )}
          </div>
          {BretagneDepartments.map(departmentNumber => (
            <DepartmentItem
              key={departmentNumber}
              departmentNumber={departmentNumber}
              valueInState={departmentValue}
              updateDepartmentValue={() =>
                updateDepartment(departmentNumber, mapWrapperRef.current)
              }
              updateMapPath={() =>
                selectMapPath(departmentValue, mapWrapperRef.current)
              }
            />
          ))}
          <SubmitButton
            formName={FORM_NAME}
            disabled={!canSubmit}
            label={i18n.t('modal.department_required.button')}
          />
        </DepartmentFormStyle>
      </DepartmentContentStyle>
      <DepartmentCancelStyle aria-hidden>
        {i18n.t('modal.department_required.cancel.text')}
        <DepartmentBackLinkStyle to="/" onClick={trackClickBackToHomepage}>
          {i18n.t('modal.department_required.cancel.link')}
        </DepartmentBackLinkStyle>
      </DepartmentCancelStyle>
    </DepartmentModalStyle>
  );
};
