# gpp-angular

### Init config

```
npm install
cd console
nodejs console.js init:config
App Name : Name of application
Version : Version of application
Type : Must be api (REST) or firebase
```

If REST api :

```
Server : Url of your server REST
Client Id : Client Id of your server REST
Client Secret : Client Secret of your server REST
```

If Firebase api :

```
Firebase : Url of your backend Firebase
```

### Create module

```
cd console
nodejs console.js module:create
Name : Name of your new module (Start with UperCase, no space, no special char)
Icon : Font Awesome icon of your module (fa-xxxx)
```

[Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/)


### Minify js and css

```
grunt build:angulr
```
