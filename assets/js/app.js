(function() {
//
	angular
		.module('app', [])
		.controller('myCtrl', myCtrl)
		.factory('ig', [function(){
			$http.get("https://api.instagram.com/v1/media/popular?access_token=2244597.277addd.6aa12926640d452db376192f209f5154")
		}])

	function myCtrl() {
		this.holla = 'holla'
	}





})();
