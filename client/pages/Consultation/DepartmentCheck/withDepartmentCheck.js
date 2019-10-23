import React from 'react';
import { generateCustomDataManager } from 'Client/helper/customData';
import { getIsActiveFeature } from 'Client/helper/featureFlipping';
import { DepartmentRequiredComponent } from './DepartmentRequiredComponent';

export const withDepartmentCheck = WrappedComponent => {
  const customDataManager = generateCustomDataManager();
  const departmentStorageKey = 'declared_department';

  return props => {
    const [department, setDepartment] = React.useState(
      customDataManager.getValue(departmentStorageKey)
    );
    const { question } = props;
    const isActiveFeature = getIsActiveFeature(question.activeFeatures);

    return (
      <>
        {!department && isActiveFeature('consultation-department-compulsory') && (
          <DepartmentRequiredComponent
            setDepartment={value => {
              customDataManager.storeValues({ [departmentStorageKey]: value });
              setDepartment(value);
            }}
          />
        )}
        <WrappedComponent {...props} />
      </>
    );
  };
};
