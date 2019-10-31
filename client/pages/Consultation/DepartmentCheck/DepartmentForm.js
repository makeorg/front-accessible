import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { useDispatch } from 'react-redux';
import { useCustomDataSelector } from 'Client/hooks/useCustomDataSelector';
import { setCustomDataKey } from 'Shared/store/actions/customData';
import { DEPARTMENT_STORAGE_KEY } from 'Shared/constants/ids';
import { modalClose } from 'Shared/store/actions/modal';

const CustomReactModal = styled(ReactModal)`
  position: relative;
  max-width: 1140px;
  max-height: 100%;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

const MainContent = styled.section`
  background-color: white;
  border-radius: 8px;
  max-width: 500px;
  padding: 30px;
`;

const CancelContent = styled.section`
  margin-top: 20px;
  max-width: 500px;
  color: white;
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 16px;
  text-align: center;
`;

const HomeLink = styled(Link)`
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;

const DepartmentMapSelector = ({ department, setDepartment }) => {
  return (
    <button
      type="button"
      onClick={() => setDepartment(22)}
      onKeyPress={() => setDepartment(22)}
    >
      {department
        ? i18n.t('modal.department_required.update_button_text')
        : i18n.t('modal.department_required.valid_button_text')}
    </button>
  );
};

export const DepartmentForm = () => {
  const currentDepartment = useCustomDataSelector(DEPARTMENT_STORAGE_KEY);
  const dispatch = useDispatch();
  const setDepartment = newDepartment => {
    dispatch(modalClose());
    dispatch(setCustomDataKey(DEPARTMENT_STORAGE_KEY, newDepartment));
  };

  if (currentDepartment) {
    return (
      <DepartmentMapSelector
        department={currentDepartment}
        setDepartment={setDepartment}
      />
    );
  }

  return (
    <CustomReactModal isOpen overlayClassName="modal-overlay">
      <MainContent>
        <DepartmentMapSelector setDepartment={setDepartment} />
      </MainContent>
      <CancelContent>
        {i18n.t('modal.department_required.cancel_main_text')}
        <HomeLink to="/">
          {i18n.t('modal.department_required.cancel_link_text')}
        </HomeLink>
      </CancelContent>
    </CustomReactModal>
  );
};
