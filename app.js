'use strict';
var myApp = angular.module('myApp', ['ngRoute'])
  .config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl : 'templates/home.html',
        controller : 'homeCtrl'
    })
    .when('/about-us', {
        templateUrl : 'templates/about_us.html',
        controller : 'about_usCtrl'
    })
    .when('/blog-details/:id', {
        templateUrl : 'templates/blog_details.html',
        controller : 'blog_detailCtrl'
    })
    .when('/contact-us', {
        templateUrl : 'templates/contact_us.html',
        controller : 'contact_usCtrl'
    })
    .when('/our-blog', {
        templateUrl : 'templates/our_blog.html',
        controller : 'our_blogCtrl'
    })
    .when('/our-gallery', {
        templateUrl : 'templates/our_gallery.html',
        controller : 'our_galleryCtrl'
    })
    .when('/our-menu', {
        templateUrl : 'templates/our_menu.html',
        controller : 'our_menuCtrl'
    })
    .when('/reservation', {
        templateUrl : 'templates/reservation.html',
        controller : 'reservationCtrl'
    })
    .when('/search', {
        templateUrl : 'templates/search.html',
        controller : 'searchCtrl'
    })
    .when('/shops', {
        templateUrl : 'templates/shops.html',
        controller : 'shopCtrl'
    })
    .when('/shop-details/:id', {
        templateUrl : 'templates/shop_details.html',
        controller : 'shop_detailsCtrl'
    })
    .when('/shopping-cart', {
        templateUrl : 'templates/shopping_cart.html',
        controller : 'shopping_cartCtrl'
    })
    .when('/testimonials', {
        templateUrl : 'templates/testimonials.html',
        controller : 'testimonialCtrl'
    })
    .otherwise({redirectTo : '/'});

    $locationProvider.html5Mode(true);

  }])

  .factory('RestaurantService', function() {
    return {
        cart = []
    }
  });