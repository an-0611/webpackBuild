import React, { Component } from 'react'
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components'
import { add } from '../common/index'
console.log(add(1,2))

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
    this.triggerNotify = this.triggerNotify.bind(this);
  }

  componentDidMount() {
    
  }

  callValue() {
    alert(this.state.value)
  }

  triggerNotify() {
    if (!('Notification' in window)) {
      alert('本瀏覽器不支援推播通知');
    } else {
      const notify = Notification.requestPermission();
      notify.then((permission) => {
        if (permission == "granted") {
          const title = "您有一則新的訊息";
          const msg = new Notification(title, {
            body: "你好,我是An",
            icon: "https://image.flaticon.com/icons/png/512/463/463202.png"
          });
          msg.addEventListener("click", event=> {
              alert("點擊接受");
          });
        }
      });
    }
  }

  render() {
    return (
      <Container prefetch>{/* prefetch預取 提前完成渲染? */}
        <Helmet>
          <title>React Helmet SSR</title>
          <meta name="description" content="description ssr" />
        </Helmet>
        <div className="app">webpack 4 環境建制</div>
        <Container primary>
          <div>heroku => docker registry container</div>
          <button onClick={() => { this.callValue() }}>Calculate</button>
          <button onClick={() => { this.triggerNotify() }}>Send Notify</button>
        </Container>
      </Container>
    );
  }
}

export default App;