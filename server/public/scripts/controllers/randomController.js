app.controller('RandomController', ['$http', function($http){
    console.log('RandomController loaded');
    let self = this;
    self.randomArray = [];

    //GET
    self.getRandomInfo = function(){
        $http({
            method: 'GET',
            url: 'http://api.giphy.com/v1/gifs/random?api_key=AzsDl2a2fzh5uGuf92d9YanyEAJ4cf0O'
    
        }).then(function(response){
            console.log('RandomGET response', response);
            self.randomArray = [response.data.data];
            
        }).catch(function(error){
            console.log('RandomGET error', error);
            
        })
        
    }//end RandomGET
    
}])//end RandomController