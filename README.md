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

### Form

Object 

Field :

```
translation : "EXAMPLE.TEST"
type : type of input html (email, password, checkbox, switch, text, radio,...)
required : true | false
regex : {"value" : "regex", "translation" : "EXAMPLE.TEST"}
validation : {"value" : "expression", "translation" : "EXAMPLE.TEST"}
```

Example : 

#### Json

```
{
    "email": {
        "translation": "USER.EMAIL",
        "type": "email",
        "required": true
    },
    "lastname": {
        "translation": "USER.LASTNAME",
        "type": "text",
        "required": true
    },
    "password": {
        "translation": "USER.PASSWORD",
        "type": "password",
        "required": true,
        "validation": {"value": "scope.object['password'] === scope.object['confpwd']", "translation": "USER.NEW_PWD_NOT_SAME_CONF_PWD" }
    }
}
```

#### Controller

$scope.userPwd = {};

```
$http({method: 'GET', url: './app/cors/form/change_password.form.json'}).success(function(data) {
    $scope.form = data;
});
$scope.userEdit = {};
$scope.save = function() {
    $rest.putObject('user/edit', {password:$scope.userEdit});
}
```

#### View

```
<cors-form settings="form" object="userEdit" save="save"></cors-form>
```