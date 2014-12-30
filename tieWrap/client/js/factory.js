(function () {
    'use strict';

    app.factory('readConfigFactory', ['$http', '$q',
        function ($http, $q) {
            var _factory = {};

            _factory.fetchConfig = function (file) {
                return $http.get('/api/resource?resource=' + encodeURIComponent(file));
            };

            return _factory;
        }
    ]);

}());
