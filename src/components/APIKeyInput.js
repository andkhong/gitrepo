import React from 'react';
import { connect } from 'react-redux';
import { getREPO } from './../actions/'
class APIKeyInput extends React.Component {
  state = {
    API_KEY: ''
  }
  handleInput = e => this.setState({ API_KEY: e.target.value })
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.API_KEY !== '') {
      const { url, getREPO } = this.props;
      getREPO(url, this.state.API_KEY);
    }
  }
  render() {
    const { API_KEY } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInput}
          value={API_KEY}
          placeholder="octocat/Hello-World"
        />
        <button> Get Repo </button>
      </form>
    )
  }
};

function mapDispatchToProps(dispatch){
  return {
    getREPO: (url, API_KEY) => dispatch(getREPO(url, API_KEY))
  };
}

export default connect(null, mapDispatchToProps)(APIKeyInput);