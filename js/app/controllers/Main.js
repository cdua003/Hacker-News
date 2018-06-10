(function() {
    'use strict';
    
    angular.module('app')
    .controller('AppCtrl', ['$scope', 
        function ($scope) {
        $scope.app = {
            name: 'H.N Clone',
            version: '0.0.1',
            currentState: null,
        }
    }]);

})();