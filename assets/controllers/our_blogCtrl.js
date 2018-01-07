angular.module('myApp').controller('our_blogCtrl', ['$routeParams', function($routeParams){

	$scope.filter = 'all';
	$scope.recipes = [{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "all"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "breakfast"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "lunch"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dinner"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "others"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/our-menu/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "drinks"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/01.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/02.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/03.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/04.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/05.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/06.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/07.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/08.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/09.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	},{
		name : "Food Title Here",
		image : "assets/images/dishes/10.jpg"
		price : "$35.00",
		description : "Cursus / Dictum / Risus",
		type : "dish"
	}];

	$scope.doReservation = function(data){

	}

}])