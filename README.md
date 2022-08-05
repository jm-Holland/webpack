<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>



# webpack-dev Sass Babel Bootstrap 

Use [webpack](https://webpack.js.org) with a development server that provides
live reloading. This should only be used for **development only**.


We will use [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) under the hood, which provides
fast in-memory access to Webpack resources.


## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)



## Getting Started

The first to do is install the modules with the following terminal command:


> Fr _ 

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

This opens the development server [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) which will automatically open your default web browser on your system and display the site page .
The method will start a server instance and begin listening for connections on [localhost:8080](https://loacalhost:8080).

webpack-dev-server is configured by default to support live file reloading. You can edit your assets while the server is running, the browser will reload as changes are made.

### in Production mode

For the production of your site when all your modifications are finished

```
yarn build
```
Webpack will compile all the code and minify it, all you have to do is copy the elements from the Dist folder and drop them on your server.




## License

#### [MIT](./LICENSE)

