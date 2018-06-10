(function() {
    'use strict';
    
      angular
        .module('app')
        .controller('BestStoriesController', BestStoriesController);
    
      BestStoriesController.$inject = [ '$scope', '$state', '$stateParams', '$location', 'storiesService'];
      function BestStoriesController($scope, $state, $stateParams, $location, storiesService) {
        $scope.app.currentState = $state.current.name;
        var vm = this;
        vm.stories = [];
        
    
        activate();
    
        function activate() {
            vm.stories = [];
            $scope.currentPage = $stateParams.page || 1;
            $scope.updatePage = updatePage;
            vm.start = 30 * ($scope.currentPage - 1) + 1;

            storiesService 
                .getBestStories()
                .then(function(res) {
                    vm.stories = res.data;
            });
            function updatePage(newPageNumber, oldPageNumber) {
                $location.url('best?page=' + newPageNumber);
                vm.start = 30 * (newPageNumber - 1) + 1;
            };
        }
      }
    
    })();