(function() {
//
	angular
		.module('app', [])
		.controller('myCtrl', myCtrl)

	function myCtrl($scope) {
		$scope.holla = 'holla'
	}

})();
