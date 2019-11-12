// @flow
import { TrackingService } from 'Shared/services/Tracking';

export const trackDisplayDepartmentModal = () => {
  const eventName = 'display-department-modal';

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDepartmentSelection = (departmentNumber: number) => {
  const eventName = 'click-department-validation';
  const parameters = { department: departmentNumber.toString() };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackDepartmentModification = (departmentNumber: number) => {
  const eventName = 'click-department-modification';
  const parameters = { department: departmentNumber.toString() };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackClickBackToHomepage = () => {
  const eventName = 'click-back-homepage';

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};
