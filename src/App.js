import React, { Component } from 'react';

import Container from './components/Container';
import Header from './components/Header';
import Timeline from './components/Timeline';

import GlobalStyle from './styles/global';

export default class Facebook extends Component {
  state = {};

  render() {
    return (
      <>
        <Container>
          <Header />
          <Timeline />
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
