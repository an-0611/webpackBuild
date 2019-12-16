import React, { Component } from 'react';

class Html extends Component {
  render() {
    const { helmet, appHtml } = this.props;
    // const scripts = bundles.filter(bundle => bundle.file.endsWith('.js')).map(bundle => <script src={`${siteUrl}${bundle.file}${staticVer}`} />);
    // const scripts = <script src="./main.js" />;
    // const scripts1 = <script src="./1.main.js" />;
    // manifest service is for PWA
    // const style = {
    //   'background': 'none'
    // }
    return (
      <html lang="zh-TW">
        <head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        </head>
        <body id="body">{/* style={ style } */}
          <div id="app" dangerouslySetInnerHTML={{ __html: appHtml }} />
          {/* <div id="app" dangerouslySetInnerHTML={{ __html: 'bodybody12333' }} /> */}
          <script type="text/javascript" src="vendors~bundle.js" />{/* !!!!!!　 */}
          {/* !!!!! app.use('/', express.static('dist')) 放在app.get()外面是client side render 放入 app.get內疚變成ssr */}
          {/* 但此時的綑綁變為兩包(webpack有把綑綁拆成兩包) 這邊的vendors~bundle.js在ssr的時候抓不到 需手動添加進html.js 添加完即完成ssr */}

          <script type="text/javascript" src="bundle.js" />{/* 包含所有client file */}
          {/* <script type="text/javascript" src={`${window.location.href}bundle.js`} /> */}{/* 還在server side抓不到window */}
          {/* // https://github.com/jakoblind/universal-react-server-bundle/blob/master/webpack.config.js */}
        </body>
      </html>
    );
  }
}

export default Html;