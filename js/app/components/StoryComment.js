(function() {
    'use strict';
  
    var StoryComment = {
      bindings: {
        id: '='
      },
      templateUrl: 'views/story-comment.html',
      controller: StoryCommentController,
      controllerAs: 'vm'
    };
    
    StoryCommentController.$inject = ['storiesService', 'getTimesFilter', 'getDomainFromUrlFilter']
    function StoryCommentController (storiesService, getTimesFilter, getDomainFromUrlFilter) {
        var vm = this;
        vm.commentText;
        vm.commentAuthor;
        vm.commentTime;
        vm.commentKids;

        storiesService 
            .getStory(vm.id)
            .then(function(res){
                vm.commentText = res.data.text;
                vm.commentAuthor = res.data.by; 
                vm.commentTime = getTimesFilter(res.data.time);
                vm.commentKids = res.data.kids;
            });
    }
  
    angular
      .module('app')
      .component('storyComment', StoryComment);
  
  })();