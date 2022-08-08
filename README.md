<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# webpack-dev Sass Babel Bootstrap 

Ce pack est conçu pour fourni une base de développement d'un petit site web en HTML.

Les outils de bases sont:
- [Bootstrap 5.2.0](https://getbootstrap.com/)
- [Bootstrap-icons 1.9.0](https://icons.getbootstrap.com/)
- [ Sass 1.54.3](https://sass-lang.com/)
- [Babel 7.18.10](https://babel.dev/docs/en/babel-core/)
- [PostCss](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)
- [Autoprefixer](https://autoprefixer.github.io/)




Nous utiliserons [webpack](https://webpack.js.org) avec un serveur de développement qui fournit un rechargement en direct. 

**Cela ne doit être utilisé que pour le développement.**

On utilisera [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) sous le capot, qui fournit un accès rapide en mémoire aux ressources Webpack.

## Index

- [Démarrage](#demarrage)
- [utilisation](#utilisation)
- [Licence](#licence)

## Démarrage 

Començons par télécharger le dossier sur votre ordinateur. Ouvrer le avec votre éditeur de code (pour ma part [vscode](https://code.visualstudio.com/)), ouvrez un terminal et installez les packages avec la commande terminal suivante: 
```console
yarn install
```
## Utilisation

Il existe deux méthodes principales recommandées pour utiliser le package :

### Mode Développement

Permet le développement local, il suffit de modifier les fichiers dans le dossier 'src'.

```console
yarn dev
```
Cela ouvre le serveur de développement [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) qui ouvrira automatiquement votre navigateur Web par défaut sur votre système et affichera la page du site.
La méthode démarrera une instance de serveur et commencera à écouter les connexions sur  [localhost:8080](https://loacalhost:8080).

webpack-dev-server est configuré par défaut pour prendre en charge le rechargement en direct des fichiers. Vous pouvez modifiez vos actifs pendant que le serveur est en cours d'exécution, le navigateur rechargera au fûr et à mesure des modifications éffectués.

### En Production

Pour la mise en production de votre site quand toutes vos modifications sont terminées

```console 
yarn build
```
Webpack compilera tout le code et le minifiera, tout ce que vous avez à faire est de copier les éléments du dossier Dist et de les déposer sur votre serveur.


## License

#### [MIT](./LICENSE)
