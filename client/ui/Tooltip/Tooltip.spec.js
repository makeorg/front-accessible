import React from 'react';
import renderer from 'react-test-renderer';
import { Tooltip } from './index';

jest.mock('Client/ui/Elements/ButtonElements', () => ({
  TooltipWrapperStyle: 'TooltipWrapperStyle',
  TooltipStyle: 'TooltipStyle',
}));

jest.mock('Client/ui/Elements/ButtonElements', () => ({
  UnstyledButtonStyle: 'UnstyledButtonStyle',
}));

describe('TooltipWithTrigger', () => {
  const defaultProps = {
    triggerContent: 'foo',
    children: 'bar',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(<Tooltip {...defaultProps} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
