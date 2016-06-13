(function() {
//
	angular
		.module('app', [])
		.controller('myCtrl', function($scope, $http){
			function fetch() {
				$http.jsonp("https://api.instagram.com/v1/tags/nofilter/media/recent?access_token=2244597.277addd.6aa12926640d452db376192f209f5154")
					.success(function(response){
						console.log(response);
					});
				}

			fetch();
		});
		// .factory('ig', [function(){
		// 	$http.get("https://api.instagram.com/v1/media/popular?access_token=2244597.277addd.6aa12926640d452db376192f209f5154")
		// }])

	// function myCtrl() {
	// 	this.holla = 'holla'
	// }

})();
