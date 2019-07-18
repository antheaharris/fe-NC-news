import React from "react";
import * as api from "../../api";

class Voter extends React.Component {
  state = {
    voteModifier: 0,
    err: null
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.voteOnComment(1)}
          disabled={this.state.voteModifier === 1 ? true : false}
        >
          + 1
        </button>
        <p>votes: {this.props.votes + this.state.voteModifier}</p>
        <button
          onClick={() => this.voteOnComment(-1)}
          disabled={this.state.voteModifier === 0 ? true : false}
        >
          -1
        </button>
      </div>
    );
  }

  voteOnComment = num => {
    api.vote(this.props.id, num);
    this.setState(state => {
      return { voteModifier: state.voteModifier + num };
    });
  };
}

export default Voter;
