(function () {
    'use strict';

    app.controller('HomeCtrl', ['$scope', 'readConfigFactory',
        function ($scope, ReadConfigFactory) {
            $scope.configViewer = null;

            $scope.nodeSelected = function (e, data) {
                var _l = data.node.li_attr;
                if (_l.isLeaf) {
                    ReadConfigFactory.fetchConfig(_l.base).then(function (data) {
                        var _d = data.data;

                        if(typeof _d === 'object')
                            $scope.configViewer = _d;
                    });
                } else {
                    //http://jimhoskins.com/2012/12/17/angularjs-and-apply.html//
                    $scope.$apply(function () {
                        $scope.configViewer = null;
                    });

                }
            };
        }
    ]);

}());
