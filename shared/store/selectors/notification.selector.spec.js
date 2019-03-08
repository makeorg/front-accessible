import { notificationConstants } from 'Shared/constants/notification';
import { selectNotificationContent } from './notification.selector';
import { initialState } from '../initialState';

describe('notification selector', () => {
  it('selectNotificationContent with initialState', () => {
    expect(selectNotificationContent(initialState)).toBe(undefined);
  });

  it('selectNotificationContent', () => {
    const state = {
      notification: {
        contentType: notificationConstants.ACTIVATION_SUCCESS_CONTENT,
      },
    };
    expect(selectNotificationContent(state)).toBe(
      notificationConstants.ACTIVATION_SUCCESS_CONTENT
    );
  });
});
