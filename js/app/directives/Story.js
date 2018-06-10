(function(){
    'use strict';

angular 
  .module('app')
  .directive('story', function(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        id: '=id',
        view: '=view'
      },
      templateUrl: 'views/story.html',
      controller: function($scope, $state, storiesService, getTimesFilter, getDomainFromUrlFilter) {
        var vm = this;
        vm.viewMode = $scope.view;
        $scope.navToComments = function(id){
            $state.go('comments', {
                id: id,
            });    
        };
        storiesService
          .getStory($scope.id)
          .then(function(res){
            vm.story = res.data; 
            vm.title = vm.story.title;
            vm.url = vm.story.url;
            if(!vm.url) {
                vm.url = 'https://news.ycombinator.com/item?id=' + vm.story.id;
              }
            vm.domain = getDomainFromUrlFilter(vm.url);
            vm.score = vm.story.score;
            vm.author = vm.story.by;
            vm.time = getTimesFilter(vm.story.time);
            vm.id = vm.story.id;
            vm.numComments = vm.story.descendants;

          });
      },
      controllerAs: 'vm',
      link: function(scope, elem, attrs, ctrl) {
        var hideLink = elem[0].querySelector('.hide');

        hideLink.addEventListener('click', function(event){
            elem.parent().remove();
        });

        scope.$on('$destroy', function(){
            elem.off();
        });
      }
    };
  });
})();