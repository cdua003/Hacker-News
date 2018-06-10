(function() {
    'use strict';
    
      angular
        .module('app')
        .controller('StoryController', StoryController);
    
      StoryController.$inject = ['$scope', '$stateParams', '$state', 'storiesService', 'story'];
      function StoryController($scope, $stateParams, $state, storiesService, story) {
        $scope.navBackTo = function(){
            if(!$scope.app.currentState || $scope.app.currentState === ""){
                $state.go("top");
            }else{
                $state.go($scope.app.currentState);
            }
        };

        var vm = this;
        vm.id = $stateParams.id;
        vm.story = story.data;
        vm.comments = story.data.kids;
        activate();
    
        function activate() { 
          storiesService
            .getStory(vm.id)
            .then(function(res) {
              vm.story = res.data;
              vm.comments = res.data.kids;
            });  
        }
      }
    })();