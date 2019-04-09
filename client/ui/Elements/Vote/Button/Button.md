##### Vote Button Example :
```js
const { VoteButtonStyle, UnvoteButtonStyle } = require('../Styled');
const { SvgThumbsUp } = require('../../../Svg/elements');

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
          buttonType={this.state.isVoted ? UnvoteButtonStyle : VoteButtonStyle}
          handleVote={this.handleVote}
        />
      </div>
    );
  }
}
;<VotButtonElementExample />
```