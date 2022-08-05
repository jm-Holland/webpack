<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>



# webpack-dev-server

Use [webpack](https://webpack.js.org) with a development server that provides
live reloading. This should be used for **development only**.

It uses [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) under the hood, which provides
fast in-memory access to the webpack assets.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)


- [License](#license)

## Getting Started

First things first, install the modules:


```console
yarn install
```


## Usage

There are two main, recommended methods of using the package:

### in Dev mode 

Allows local development, just modify the files in the source folder.

```console
yarn dev
```


This opens the webpack development server which will automatically open your system's default web browser and display the site page.
Either method will start a server instance and begin listening for connections
from `localhost` on port `8080`.

webpack-dev-server is configured by default to support live-reload of files as
you edit your assets while the server is running.


### in Production mode

```
yarn build
```
Webpack will compile all the code and minify it, all you have to do is copy the elements from the Dist folder and drop them on your server.




## License

#### [MIT](./LICENSE)

