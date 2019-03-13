import React from 'react';
import renderer from 'react-test-renderer';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import {
  CollapseContentStyle,
  CollapseIconStyle,
  CollapseTriggerStyle,
} from './Styled';

describe('CollapseComponent Style', () => {
  it('style must match collpasing properties for CollapseContentStyle', () => {
    const expandedContent = renderer
      .create(<CollapseContentStyle iscollapsed={false} />)
      .toJSON();

    const collapseContent = renderer
      .create(<CollapseContentStyle iscollapsed />)
      .toJSON();

    expect(expandedContent).toHaveStyleRule('height', 'auto');
    expect(collapseContent).toHaveStyleRule('height', '0');
  });

  it('style must match collpasing properties for CollapseIconStyle', () => {
    const defaultIcon = renderer
      .create(<CollapseIconStyle iscollapsed={false} />)
      .toJSON();

    const rotatedIcon = renderer
      .create(<CollapseIconStyle iscollapsed />)
      .toJSON();

    expect(defaultIcon).toHaveStyleRule('transform', 'rotate(90deg)');
    expect(rotatedIcon).toHaveStyleRule('transform', 'rotate(0)');
  });

  it('style must match force desktop expand  properties for CollapseContentStyle', () => {
    const forcedExpandOnDesktop = renderer
      .create(<CollapseContentStyle desktopexpanded />)
      .toJSON();

    expect(forcedExpandOnDesktop).toHaveStyleRule('height', 'auto');
  });

  it('style must match force desktop expand  properties for CollapseTriggerStyle', () => {
    const forcedExpandOnDesktop = renderer
      .create(<CollapseTriggerStyle />)
      .toJSON();

    expect(forcedExpandOnDesktop).toHaveStyleRule('cursor', 'text', {
      modifier: ':disabled',
    });
    expect(forcedExpandOnDesktop).toHaveStyleRule(
      'color',
      BasicColors.PureBlack,
      {
        modifier: ':disabled',
      }
    );
  });
});
