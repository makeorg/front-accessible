import { shallow } from 'enzyme';
import QualificationComponent from '../../components/Qualification';
import QualificationContainer from './';

describe('QualificationContainer', () => {
  const defaultProps= {
    qualifications: [],
    proposalId: 'foo',
    index: 1,
    tabIndex: 0,
    votedKey: 'foo'
  }

  it('Renders Initial Props & State', () => {
    const wrapper = shallow(<QualificationContainer {...defaultProps} />);

    const expectedProps = {
      ...defaultProps,
      handleQualification: () => {}
    };

    expect(wrapper.find(QualificationComponent)).to.have.length(1);
    const QualificationComponentProps = wrapper.find(QualificationComponent).first().props();
    expect(QualificationComponentProps.proposalId).to.be.equal(expectedProps.proposalId);
    expect(QualificationComponentProps.votedKey).to.be.equal(expectedProps.votedKey);
    expect(QualificationComponentProps.qualifications).to.be.equal(expectedProps.qualifications);
    expect(QualificationComponentProps.handleQualification).to.be.a('function');
    expect(QualificationComponentProps.tabIndex).to.be.equal(expectedProps.tabIndex);
  });
});
