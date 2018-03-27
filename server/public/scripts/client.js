let app = angular.module('GiphyApp', ['ngRoute'] );

app.config(function($routeProvider){
    console.log('config is loaded');

    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        .when('/random', {
            templateUrl: '/views/random.html',
            controller: 'RandomController as vm'
        }).otherwise({redirectTo: '/search'})
    
})

// app.controller('SearchController', ['$http', function($http){
//     console.log('controller loaded');
//     let self = this;
//     self.searchArray = [];

//GET
//  self.getSearchInfo = function(newSearch) {
//      console.log('in searchInfo');
//      $http({
//          method: 'GET',
//          url: 'http://api.giphy.com/v1/gifs/search?api_key=AzsDl2a2fzh5uGuf92d9YanyEAJ4cf0O&q=' + newSearch,
//      }).then(function(response){
//          console.log('GET response');
//         self.searchArray = response.data.data;
//         console.log('searchArray', self.searchArray);
        
//      }).catch(function(error){
//          console.log('GET error', error);
//      })
//  } // end GET

// }]) // end SearchController


// app.controller('RandomController', ['$http', function($http){
//     console.log('RandomController loaded');
//     let self = this;
//     self.randomArray = [];

//     //GET
//     self.getRandomInfo = function(){
//         $http({
//             method: 'GET',
//             url: 'http://api.giphy.com/v1/gifs/random?api_key=AzsDl2a2fzh5uGuf92d9YanyEAJ4cf0O'
    
//         }).then(function(response){
//             console.log('RandomGET response', response);
//             self.randomArray = [response.data.data];
            
//         }).catch(function(error){
//             console.log('RandomGET error', error);
            
//         })
        
//     }//end RandomGET
    
// }])//end RandomController