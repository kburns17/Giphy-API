let app = angular.module('GiphyApp', [] );

app.controller('SearchController', ['$http', function($http){
    console.log('controller loaded');
    let self = this;
    self.searchArray = [];



//GET
 self.getSearchInfo = function(newSearch) {
     console.log('in searchInfo');
     $http({
         method: 'GET',
         url: 'http://api.giphy.com/v1/gifs/search?api_key=AzsDl2a2fzh5uGuf92d9YanyEAJ4cf0O&q=' + newSearch,
     }).then(function(response){
         console.log('GET response', response);
        self.searchArray = response.data;
     }).catch(function(error){
         console.log('GET error', error);
     })
 } // end GET





}]) // end Controller