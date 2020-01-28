import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { QualificationButtonElement } from './index';

jest.mock('Client/ui/Elements/Qualification/Styled', () => ({
  QualifyButtonStyle: 'QualifyButtonStyle',
  CounterStyle: 'CounterStyle',
}));

describe('QualificationButtonElement', () => {
  const defaultProps = {
    color: 'red',
    label: 'foo',
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer
      .create(<QualificationButtonElement {...defaultProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot when proposal is qualified or not', () => {
    const ButtonIsQualified = renderer
      .create(<QualificationButtonElement {...defaultProps} isQualified />)
      .toJSON();
    const ButtonIsNotQualified = renderer
      .create(
        <QualificationButtonElement {...defaultProps} isQualified={false} />
      )
      .toJSON();
    expect(
      snapshotDiff(ButtonIsQualified, ButtonIsNotQualified)
    ).toMatchSnapshot();
  });
});
