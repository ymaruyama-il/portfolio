# はじめに
yarnのインストールが必要です。
下記ページを参照してインストールをお願いします。
https://classic.yarnpkg.com/ja/docs/install#mac-stable

yarnのインストールが済んだら、下記のコマンドで開発モードになります。
localhost:8080が起動するので、ブラウザで開いてみてください。

```
yarn start
```

htmlなどの出力は下記のコマンドで実行します。

```
yarn build
```

masterにマージすると、下記のURLに本番公開されます。
https://ymaruyama-il.github.io/portfolio/

# vue-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
