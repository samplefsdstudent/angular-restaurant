angular.module('myApp').controller('shopping_cartCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams,RestaurantService){
	$scope.items = RestaurantService.cart;
	$scope.filter = '1';
	angular.forEach($scope.items, function(item){
		$scope.total_amount += item.price*item.number;
	})

	$scope.next = function(flag){
		if(flag == 0){
			
		}else if(flag == 1){
			
		} else if(flag == 2){
			
		}
	}

	$scope.$watch('items', function(oldValue, newValue){
		angular.forEach($scope.items, function(item){
			$scope.total_amount += item.price*item.number;
		})
	}, true)
}])