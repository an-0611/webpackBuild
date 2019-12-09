import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

const Container = styled.div`
  color: red;
  text-align: center;
`

class App extends React.Component {
  render() {
    return (
      <Container>
        <div className="app">webpack 4 環境建制1</div>
      </Container>
    );
  }
}

// if (module.hot) module.hot.accept();

ReactDOM.render(
  <App />,
  document.getElementById('content')
);