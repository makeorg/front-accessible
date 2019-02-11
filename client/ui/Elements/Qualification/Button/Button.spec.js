import React from 'react';
import snapshotDiff from 'snapshot-diff';
import renderer from 'react-test-renderer';
import { QualificationButtonElement } from './index';

describe('QualificationButtonElement', () => {
  const defaultProps = {
    color: 'red',
    label: 'foo'
  };

  it('must match the snapshot with default Props', () => {
    const component = renderer.create(
      <QualificationButtonElement {...defaultProps} />
    );
    expect(component).toMatchSnapshot();
  });

  it('must return the diff between snapshot with a negative vs a postive Tab Index', () => {
    const NegativeTabIndex = renderer.create(
      <QualificationButtonElement {...defaultProps} tabIndex="-1" />
    );
    const PositiveTabIndex = renderer.create(
      <QualificationButtonElement {...defaultProps} tabIndex="0" />
    );
    expect(snapshotDiff(NegativeTabIndex, PositiveTabIndex)).toMatchSnapshot();
  });

  it('must return the diff between snapshot when proposal is qualified or not', () => {
    const ButtonIsQualified = renderer.create(
      <QualificationButtonElement {...defaultProps} isQualified />
    );
    const ButtonIsNotQualified = renderer.create(
      <QualificationButtonElement {...defaultProps} isQualified={false} />
    );
    expect(snapshotDiff(ButtonIsQualified, ButtonIsNotQualified)).toMatchSnapshot();
  });
});
