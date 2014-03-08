KineticJS integration with AngularJS
===============


Add the module **kinetic** as a dependency to your app

```js
var myApp = angular.module('myApp', ['kinetic']);
```

then use the stage directive as an element

```html
<stage></stage>
```

or an attribute

```html
<div stage=""></div>
```

then catch the event **'KINETIC:READY'** on any controller

```js
$scope.$on('KINETIC:READY', function kineticReady (event, stage) {
	// do something with the stage
	// like stage.add(new Kinetic.Layer());
	// ...
});
```
