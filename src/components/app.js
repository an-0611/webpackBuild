import React, { Component } from 'react'
import Helmet from 'react-helmet';
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
// https://medium.com/webpack/webpack-4-import-and-commonjs-d619d626b655

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 666,
    };
    this.callValue = this.callValue.bind(this);
  }

  callValue() {
    alert(this.state.value)
  }

  render() {
    return (
      <Container prefetch>{/* prefetch預取 提前完成渲染? */}
        <Helmet>
          <title>helmet test</title>
          <meta name="description" content="desc ssr test" />
        </Helmet>
        <div className="app">webpack 4 環境建制</div>
        <Container primary>
          <div>test</div>
          <button onClick={() => { this.callValue() }}>callValue</button>
        </Container>
      </Container>
      // npm run git -- "" && postgit
      // npm run git -- "update css module" && postgit
      // 測試 build 好的檔案 'test': npm run build && mocha --compilers js:babel-core/register
      // docker deploy => npm run build && docker-compose up -d https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/188625/
      // dockerfile setting https://www.jinnsblog.com/2018/12/docker-dockerfile-guide.html
    );
  }
}

// if (module.hot) module.hot.accept();

export default App;