import jestExpect from 'expect';
import toMatchSnapshot from "expect-mocha-snapshot";
import renderer from 'react-test-renderer';
import ForgotPasswordFormComponent from './index';

describe("ForgotPasswordFormComponent", function () {
  it("must match the snapshot by default", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ForgotPasswordFormComponent errors={[]} />
    );
    jestExpect(component).toMatchSnapshot(this);
  });

  it("must match the snapshot with errors", function () {
    // TODO need to use shallow with jest for better testing
    const component = renderer.create(
      <ForgotPasswordFormComponent errors={[{
        field: 'email',
        message: 'Error message 1'
      }, {
        field: 'field',
        message: 'Error message 2'
      }]} />
    );
    jestExpect(component).toMatchSnapshot(this);
  });
});