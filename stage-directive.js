(function() {
    'use strict';
    angular.module('kinetic', [])
    .directive('stage', ['$rootScope',
    function stageDirective ($rootScope) {
        return {
            restrict: 'EA',
            scope: {
                stageWidth: '=',
                stageHeight: '='
            },
            link: function linkFn (scope, elem, attrs) {
                var id = attrs["id"];
                if (!id) {
                    id = Math.random().toString(36).substring(8);
                    elem.attr('id', id);
                }
                var stageWidth = scope.stageWidth || 800;
                var stageHeight = scope.stageHeight || 600;

                var kinetic = {
                    stage: new Kinetic.Stage({
                        container: id,
                        width: stageWidth,
                        height: stageHeight
                    })
                };

                scope.kinetic = kinetic;
                // console.log('New Stage Created', kinetic.stage);

                $rootScope.$broadcast('KINETIC:READY', kinetic.stage);
            }
        };
    }]);
})();