##### Vote Button Example :
```jsx
import { VoteButtonStyle, IsVotedButtonStyle } from '../Styled';
import { SvgThumbsUp } from '../../../Svg/elements';
import { VoteButtonElement } from './index';

class VotButtonElementExample extends React.Component {
  constructor() {
    super()
    this.state = {
      isVoted: false
    }
    this.handleVote =  this.handleVote.bind(this);
  }

  handleVote(event) {
    this.setState(prevstate => ({
      isVoted: !prevstate.isVoted
    }));
  }

  render() {
    return (
      <div>
        <VoteButtonElement
          color="rgb(110, 182, 32)"
          label="label"
          icon={<SvgThumbsUp/>}
          buttonType={this.state.isVoted ? IsVotedButtonStyle : VoteButtonStyle}
          handleVote={this.handleVote}
        />
      </div>
    );
  }
}
;<VotButtonElementExample />
```