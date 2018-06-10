(function() {
    'use strict';
    
      angular
        .module('app')
        .service('storiesService', storiesService);
    
        storiesService.$inject = ['$http'];

        function storiesService($http) {
          this.getAllStories = getAllStories;
          this.getTopStories = getTopStories;
          this.getBestStories = getBestStories;
          this.getStory = getStory;
      
          function getAllStories() {
            return $http.get('https://hacker-news.firebaseio.com/v0/newstories.json');
          }

          function getTopStories() {
            return $http.get('https://hacker-news.firebaseio.com/v0/topstories.json');
          }

          function getBestStories() {
            return $http.get('https://hacker-news.firebaseio.com/v0/beststories.json');
          }
          
          function getStory(id) {
            return $http.get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json');
          }
        }
    })();