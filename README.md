## Introduction
The project is build with React + webpack4 + babel7 from 0 to 1 <br />
The Heroku [Demo](https://webpackbuild.herokuapp.com/) is here <br />

## Stacks
| Name | Version | Description |
|---------|--------|-------------|
| [Travis]         | 1.8.10 | Continuous Integration(CI) tool |
| [Docker]         | 19.03.5 | Computer program that performs operating-system-level virtualization, also known as "containerization". |
| [Node.js]        | 10.15.3 | Server environment runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.) |
| [Heroku]         | 10.15.3 | Cloud platform that lets companies build, deliver, monitor and scale apps |
| [Server-side-render]   | no version | (SSR) is a popular technique for rendering a normally client-side only single page app (SPA) on the server and then sending a fully rendered page to the client |

[Travis]: https://travis-ci.com/
[Docker]: https://www.docker.com/
[Node.js]: https://nodejs.org/en/
[Heroku]: https://www.heroku.com/
[Server-side-render]: https://pjchender.github.io/2018/09/21/react-ssr-%E7%AD%86%E8%A8%98/

## Plugins
| Name | Version | Description |
|---------|--------|-------------|
| [React]          | 16.12.0 | JavaScript library for building user interfaces |
| [Mocha]          | 6.2.2 | JavaScript test framework running on Node. js and in the browser |
| [Webpack]        | 4.41.2 | Static module bundler for modern JavaScript applications |
| [Express]        | 4.17.1 | Node.js Web Framework |
| [Styled-Component]  | 4.4.1 | pattern with Css In Js, to enhance CSS for styling React component systems |

> [!NOTE]
> Webpack4 features: tree shaking(default), code splitting(--mode prod is default), dynamic import, router, dead code elimination, minify

[React]: https://reactjs.org/
[Mocha]: https://mochajs.org/
[Webpack]: https://webpack.js.org/
[Express]: https://expressjs.com/zh-tw/
[Styled-Component]: https://www.styled-components.com/

## Script
Test code with mocha
```bash
  npm run test
```
Watch && build ./dist/server.js with dev env
```bash
  npm run watch
```
build ./dist/server.js with prod env
```bash
  npm run build
```
Run bundled server
```bash
  npm run start
```
Git add && commit + (commit name)
```bash
  npm run git --\"first commit\"
```
Git push to origin master
```bash
  npm run postgit
```
Git pull
```bash
  npm run pull
```
Build Docker images
```bash
  npm run dockerBuild
```
Run docker images server (need build image first)
```bash
  npm run dockerServer
```
Show All Images Id
```bash
  npm run findImagesId
```
Delete 1 image + (image.id)
```bash
  npm run deleteImages+id
```
Stop all Docker containers
```bash
  npm run stopAllContainer
```
Delete all Docker containers
```bash
  npm run deleteAllContainer
```
Listening ./dist/server.js modify
```bash
  npm run production
```

## Schedule
> ~~React~~ (later translate to Redux or Hook) // done <br />
> ~~Webpack4~~<br />
> ~~Webpack Plugin (e.g. HMR)~~<br />
> ~~Mocha~~<br />
> ~~Travis~~<br /> 
> ~~Docker~~<br />
> ~~Docker hub~~<br />
> ~~Heroku~~<br />
> ~~Server side rendering~~<br />
<br />

## Optimize project (todolist)
> router
> update architecture(Flux or Redux) <br />
> use redux middleware(thunk or saga or observable)<br />
> html schema
> graphql
> webpack split prod dev env (webpack4 no need)

## Reference
[MarkDown grammar](https://docs.microsoft.com/zh-tw/contribute/how-to-write-use-markdown)
[Webpack code splitting](https://webpack.js.org/guides/code-splitting/)
[Webpack 2 env](https://neighborhood999.github.io/webpack-tutorial-gitbook/Part1/WebpackDevServer.html)
[Node.js webserver](https://ithelp.ithome.com.tw/articles/10185302)

## useful article
[webpack4 react babel7 sample 0 to 1](https://blog.usejournal.com/setting-up-react-webpack-4-babel-7-from-scratch-2019-b771dca2f637)

> [!TIP]
> Dependencies on Heroku need update webpack && express
> npm run dockerize need open docker first
> git pull --rebase need storaged

> [!CAUTION]
> Entry can't use react e.g. class App extends component , can't read it.(resolved, use babel to transform es5)
> Update Heroku question: Filename need lowercase. (maybe resolve, test no yet)

