angular.module('myApp').controller('homeCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams, $scope, RestaurantService){

	$scope.filter = 'all';
	$scope.reserveData = {
		no_persons : 0
	};
	$scope.recipes = RestaurantService.recipes;

	$scope.doReservation = function(data){
		alert('Hi ' + data.name + ' ,Booking is done!')
	}

	$scope.addToCart = function(data, index){
		if(!data.checked){
			RestaurantService.cart.push({
			name : data.name,
			image : data.image,
			price : data.price,
			description : data.description,
			type : data.type
			})
			alert(`"${data.name}" is added to your Cart!`);
			$scope.recipes[index].checked = true;
			return true;
		}else{
			for(var i=0;i < RestaurantService.cart.length;i++){
				if(angular.equals(RestaurantService.cart[i].name, data.name))
					RestaurantService.cart.splice(i,1);
					break;
			}
			alert(`"${data.name}" is removed from your Cart!`);
			console.log(RestaurantService.cart);
			RestaurantService.recipes[index] = false;
			$scope.recipes = RestaurantService.recipes;
			return true;
		}
	}

	$scope.switch = function(value, data, index){
		var bool = $scope.addToCart(data,index)
		if(bool){
			return (value) ? $scope.recipes[index].checked = false : $scope.recipes[index].checked = true
		}
	}
}])