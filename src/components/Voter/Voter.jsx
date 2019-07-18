import React from "react";
import * as api from "../../api";
import ErrorPage from "../ErrorPage";

class Voter extends React.Component {
  state = {
    voteModifier: 0,
    err: null
  };

  render() {
    const { voteModifier, err } = this.state;
    const { votes, type } = this.props;
    if (err) return <ErrorPage err={err} />;
    return (
      <div>
        <button
          onClick={() => this.voteOnComment(type, 1)}
          disabled={voteModifier === 1 ? true : false}
        >
          + 1
        </button>
        <p>votes: {votes + voteModifier}</p>
        <button
          onClick={() => this.voteOnComment(type, -1)}
          disabled={voteModifier === 0 ? true : false}
        >
          -1
        </button>
      </div>
    );
  }

  voteOnComment = (type, num) => {
    api.vote(type, this.props.id, num);
    this.setState(state => {
      return { voteModifier: state.voteModifier + num };
    });
  };
}

export default Voter;
