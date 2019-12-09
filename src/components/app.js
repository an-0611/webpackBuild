import React from 'react'
import ReactDOM from 'react-dom'

import styled, { css } from 'styled-components'

const Container = styled.div`
  color: ${props => props.primary ? 'green' : 'red'};
  text-align: center;
  opaciy: 1;
  ${props => props.primary && css`
    background: white;
    border: 1px solid black;
  `};
`

class App extends React.Component {
  render() {
    return (
      <Container prefetch>{/* prefetch預取 提前完成渲染? */}
        <div className="app">webpack 4 環境建制1</div>
        <Container primary>
          <div>test</div>
        </Container>
      </Container>
      // npm run git -- "" && postgit
      // npm run git -- "update css module" && postgit
      // 測試 build 好的檔案 'test': npm run build && mocha --compilers js:babel-core/register
    );
  }
}

// if (module.hot) module.hot.accept();

ReactDOM.render(
  <App />,
  document.getElementById('content')
);