/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { Svg } from 'Client/ui/Svg';
import { SeparatorStyle } from '../Styled/Content';
import { ProposalCardComponent } from './ProposalCardComponent';

describe('ProposalCardComponent', () => {
  it('Check a11y rules', () => {
    const proposal = {
      author: {
        firstName: 'foo',
      },
      createdAt: '2018-10-24T12:45:25.752Z',
      content: 'il faut bar',
    };
    const wrapper = shallow(<ProposalCardComponent proposal={proposal} />);

    expect(wrapper.find(Svg).prop('aria-hidden')).toBe(true);
    expect(wrapper.find(SeparatorStyle).prop('aria-hidden')).toBe(true);
  });
});
