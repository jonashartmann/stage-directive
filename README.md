Stage Directive
===============

KineticJS integration with AngularJS as a directive

```html
<stage></stage>
```

or

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
