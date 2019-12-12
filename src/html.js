import React, { Component } from 'react';

class Html extends Component {
  render() {
    const { helmet } = this.props;
    // const scripts = bundles.filter(bundle => bundle.file.endsWith('.js')).map(bundle => <script src={`${siteUrl}${bundle.file}${staticVer}`} />);
    // const scripts = <script src="./main.js" />;
    // const scripts1 = <script src="./1.main.js" />;
    return (
      <html lang="zh-TW">
        <head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        </head>
        <body id="body">
          {/* <div id="app" dangerouslySetInnerHTML={{ __html: content }} /> */}
          <div id="app" dangerouslySetInnerHTML={{ __html: 'bodybody12333' }} />
          {/* <script type="text/javascript" src="./bundle.js" /> */}
          {/* <script type="text/javascript" src={`${window.location.href}bundle.js`} /> */}{/* 還在server side抓不到window */}
        </body>
      </html>
    );
  }
}

export default Html;