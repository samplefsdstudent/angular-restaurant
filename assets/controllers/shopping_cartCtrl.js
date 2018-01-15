angular.module('myApp').controller('shopping_cartCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams,RestaurantService){
	$scope.items = RestaurantService.cart;
}])