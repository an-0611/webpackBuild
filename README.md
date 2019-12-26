## Introduction
The project is build with React + webpack4 + babel7 from 0 to 1 <br />
The [Demo](https://webpackbuild.herokuapp.com/) is here <br />

## Stacks
| Name | Version | Description |
|---------|--------|-------------|
| [Mocha]                | [![vuex-status]][vuex-package] | Large-scale state management |
| [Travis]             | [![vue-cli-status]][vue-cli-package] | Project scaffolding |
| [Docker]          | [![vue-loader-status]][vue-loader-package] | Single File Component (`*.vue` file) loader for webpack |
| [Server-side-render]              | [![vue-rx-status]][vue-rx-package] | RxJS integration |

## Plugins
| Name | Version | Description |
|---------|--------|-------------|
| [React]          | 4.41.2 | Single-page application routing |
| [Webpack]          | 4.41.2 | Single-page application routing |
| [Node.js] | [![vue-server-renderer-status]][vue-server-renderer-package] | Server-side rendering support |
| [Express] | [![vue-class-component-status]][vue-class-component-package] | TypeScript decorator for a class-based API |
| [Styled-Component]        | [![vue-devtools-status]][vue-devtools-package] | Browser DevTools extension |

[webpack]: https://github.com/vuejs/vue-router
[vuex]: https://github.com/vuejs/vuex
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-loader]: https://github.com/vuejs/vue-loader
[vue-server-renderer]: https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer
[vue-class-component]: https://github.com/vuejs/vue-class-component
[vue-rx]: https://github.com/vuejs/vue-rx
[vue-devtools]:  https://github.com/vuejs/vue-devtools

1. React (later translate to Redux or Hook) // done <br />
2. Webpack4 // done<br />
3. Webpack Plugin // done<br />
4. [Travis](https://travis-ci.org/) // done<br /> 
5. Mocha // done<br />
6. Docker // done<br />
7. [Heroku](https://webpackbuild.herokuapp.com/) // done<br />
8. Server side rendering // done <br />
9. Jenkins // (need service, use travis now)<br />
10. Redux middleware(thunk saga observable) // no yet <br />
11. buy one service to set docker image (travis test done => create docker image => service)

ps: setting tree shaking, code splitting, dynamic import, router, dead code elimination, minify


e.g. graphql(https://ithelp.ithome.com.tw/articles/10209443), html schema router
https://webpack.js.org/guides/code-splitting/
// split 2 webpack with dev && prod
https://neighborhood999.github.io/webpack-tutorial-gitbook/Part1/WebpackDevServer.html

other webpack4 react babel7 sample
https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637

nodejs webserver
https://ithelp.ithome.com.tw/articles/10185302

!!!!!!notice
// entry can't use react e.g. class App extends component , can't read it
// update heroku => filename need lowercase
// dependencies on heroku need update webpack && express
// npm run dockerize need open docker first
// git pull --rebase neet storaged

