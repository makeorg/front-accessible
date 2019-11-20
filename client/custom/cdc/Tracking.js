// @flow
import { TrackingService } from 'Shared/services/Tracking';

export const trackDisplayDepartmentModal = () => {
  TrackingService.sendAllTrackers('display-department-modal');
};

export const trackDepartmentSelection = (departmentNumber: number) => {
  TrackingService.sendAllTrackers('click-department-validation', {
    department: departmentNumber.toString(),
  });
};

export const trackDepartmentModification = (departmentNumber: number) => {
  TrackingService.sendAllTrackers('click-department-modification', {
    department: departmentNumber.toString(),
  });
};

export const trackClickBackToHomepage = () => {
  TrackingService.sendAllTrackers('click-back-homepage');
};
