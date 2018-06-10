angular
    .module('app', ['ui.router', 'angularUtils.directives.dirPagination', 'ngSanitize'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('all', {
            url: '/all?page',
            templateUrl: 'views/all-stories.html',
            controller: 'AllStoriesController as vm'
        })
        .state('top', {
            url: '/top?page',
            templateUrl: 'views/top-stories.html',
            controller: 'TopStoriesController as vm'
        })
        .state('best', {
            url: '/best?page',
            templateUrl: 'views/best-stories.html',
            controller: 'BestStoriesController as vm'
        })
        .state('comments', {
            url: '/post?id', 
            templateUrl: 'views/story-comments.html', 
            controller: 'StoryController as vm',
            resolve:{
                story: function($stateParams, storiesService){
                    return storiesService.getStory($stateParams.id);
                }
            }
            })
        $urlRouterProvider.otherwise('/all');

    });