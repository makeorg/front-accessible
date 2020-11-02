import React from 'react';
import * as redux from 'react-redux';
import renderer from 'react-test-renderer';
import { FirstVoteTip } from 'Client/app/Notifications/Tip/FirstVote';
import { Tip } from './index';

jest.mock('./style', () => ({
  TipWrapperStyle: 'TipWrapperStyle',
  TipCrossStyle: 'TipCrossStyle',
  TriangleUpStyle: 'TriangleUpStyle',
  TriangleDownStyle: 'TriangleDownStyle',
  LinkStyle: 'LinkStyle',
}));

jest.mock('Client/ui/Svg/elements', () => ({
  SvgClose: 'SvgClose',
}));

jest.mock('Client/ui/Elements/AccessibilityElements', () => ({
  ScreenReaderItemStyle: 'ScreenReaderItemStyle',
}));

jest.mock('Client/ui/Elements/Notifications/Icon', () => ({
  NotificationIcon: 'NotificationIcon',
}));

describe('TagTooltip', () => {
  jest.spyOn(redux, 'useSelector').mockImplementation(selector =>
    selector({
      notifications: {
        tip: {
          id: 'FIRST_VOTE_TIP',
          content: <FirstVoteTip />,
          level: 'information',
          toDismiss: true,
        },
        dismissed: [],
      },
    })
  );
  jest.spyOn(redux, 'useDispatch').mockReturnValue(() => {});

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<Tip />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
