angular.module('myApp').controller('our_menuCtrl', ['$routeParams','$scope','RestaurantService', function($routeParams,$scope,RestaurantService){
	$scope.filter = 'all';
	$scope.recipes = [{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/01.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/02.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/03.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/04.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/05.jpg",
		price : 35.00,
		number : 1,
		checked : false,
		description : "Cursus / Dictum / Risus",
		type : "dish"
	}];

	$scope.addToCart = function(data, index){
		if(!item.checked){
			RestaurantService.cart.push({
			name : data.name,
			image : data.image,
			price : data.price,
			description : data.description,
			type : data.type
			})
			console.log(`"${data.name}" is added to your Cart!`);
			$scope.recipes[index].checked = true;
		}else{
			RestaurantService.cart.filter(function(recipe, index){
				if(!angular.equals(recipe.name, data.name)){
					return recipe
				}
			})
			console.log(`"${data.name}" is removed from your Cart!`);
			console.log(RestaurantService.cart);
			$scope.recipes[index].checked = false;
		}
	}

	$scope.switch = function(value, data){
		if(value){
			
		}
		else{
			$scope.addToCart(data);
		}
		return (value) ? false : true
	}
}])