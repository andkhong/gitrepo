import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import APIKEYInput from './APIKeyInput';
import Loading from './Loading';
import Error from './Error';
import List from './List';

function App({ isLoading, hasErrored, repo, user }){
  let url = 'https://api.github.com/repos/';
  return (
    <div className="App">
      <APIKEYInput url={url} />
      {isLoading && !hasErrored && <Loading />}
      {hasErrored && <Error />}
      {repo && <List repo={repo} user={user} />}
    </div>
  );
}

function mapStateToProps(state){
  return state;
}

export default connect(
  mapStateToProps
)(App);