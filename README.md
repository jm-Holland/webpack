<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

# webpack-dev Sass Babel Bootstrap 

Ce pack est conçu pour fourni une base de développement d'un petit site web en HTML, SCSS et Javascript.

## Index

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Images et fonts](#images)
- [Licence](#licence)


## Les outils de bases sont:

- [Bootstrap 5.2.0](https://getbootstrap.com/)
- [Bootstrap-icons 1.9.0](https://icons.getbootstrap.com/)
- [ Sass 1.54.3](https://sass-lang.com/)
- [Babel 7.18.10](https://babel.dev/docs/en/babel-core/)
- [PostCss](https://github.com/postcss/postcss/blob/main/docs/README-cn.md)
- [Autoprefixer](https://github.com/postcss/autoprefixer)


Nous utiliserons [webpack](https://webpack.js.org) avec un serveur de développement qui fournit un rechargement en direct. 

**Cela ne doit être utilisé que pour le développement.**

On utilisera [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) sous le capot, qui fournit un accès rapide en mémoire aux ressources Webpack.


## [Installation](#Installation) 

Començons par télécharger le dossier sur votre ordinateur. Ouvrer le avec votre éditeur de code (pour ma part [vscode](https://code.visualstudio.com/)), ouvrez un terminal et installez les packages avec la commande terminal suivante: 
```console
yarn install
```
## [Utilisation](#utilisation)

Il existe deux méthodes principales recommandées pour utiliser le package :

### Mode Développement

Ce mode permet le développement sur votre ordinateur.
Ouvrez votre Terminal et taper la commande suivante: 

```console
yarn dev
```
Cela ouvre le serveur de développement [webpack-dev](https://webpack.js.org/api/webpack-dev-server/#root) qui ouvrira automatiquement votre navigateur Web par défaut sur votre système et affichera la page du site.
La méthode démarrera une instance de serveur et commencera à écouter les connexions sur  [localhost:9000](https://loacalhost:9000).

webpack-dev-server est configuré par défaut pour prendre en charge le rechargement en direct des fichiers. Vous pouvez modifiez vos actifs pendant que le serveur est en cours d'exécution, le navigateur rechargera au fûr et à mesure des modifications éffectués.

### Mode Production

Si vous avez terminé le développement de votre site il faut maintenant le passer en production.
Pour se faire, dans votre terminal taper la commande suivante :

```console 
yarn build
```
Webpack compilera tout le code et le mimiifiera, tout ce que vous avez à faire ensuite, est de copier les éléments du dossier **dist** et de les déposer sur votre serveur en ligne.


## [Images & fonts](#images)

Pour la gestion des images et des fonts, dans le dossier **src** déposer vos éléments dans les dossiers correspondant.
Lors de la compilation du code, les images et les fonts seront automatiquement copiés dans le dossier **dist**, vous n'avez rien à faire si ce n'est de gérer le poids et la dimensions de vos images.

### [Licence CreativeCommuns](https://github.com/illaweb35/Licence)


