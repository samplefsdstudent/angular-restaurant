angular.module('myApp').controller('shopping_cartCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams,RestaurantService){
	$scope.items = RestaurantService.cart;
	$scope.filter = '1';

	$scope.next(flag){
		if(flag == 0){
			
		}
	}
}])