'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']);


/* Controllers */

function stageController($scope) {

    $scope.title = 'Planet Shop';

    $scope.items = [{
        title: 'Moon',
        price: '9.99€',
        src: 'img/moon.png'
    }, {
        title: 'Sun',
        price: '29.99€',
        src: 'img/sun.png'
    }, {
        title: 'Earth',
        price: '19.99€',
        src: 'img/earth.png'
    }, {
        title: 'Pluton',
        price: '5.50€',
        src: 'img/pluton.png'
    }, {
        title: 'Mars',
        price: '24.00€',
        src: 'img/mars.png'
    }];

    $scope.cartItems = [];

    $scope.buyItem = function (title, price) {
        var objAdded = {
            title: title,
            price: price
        };
        $scope.cartItems.push(objAdded);
    }

}


/* Directives */

angular.module('myApp.directives', []).

directive('itemCard', function () {
    // return the directive definition object 
    return {
        scope: {
            title: '@itemTitle',
            price: '@itemPrice',
            src: '@itemSrc'
        },
        controller: function ($scope, $element, $attrs, $location) {
            $scope.addToCart = function (t, p) {
                var mainScope = angular.element("#main").scope();
                mainScope.buyItem(t, p);
                return false;
            };
        },
        replace: true,
        template: '<div class="item-int"><h3>{{title}}</h3><div class="data"><img src="{{src}}" title="{{title}}"><p style="align:center;">price: {{price}}</p><button style="background:skyblue;"><a ng-click="addToCart(title, price);">Add to cart</a><button></div></div>'
    };
}).

directive('shoppingCart', function () {
    return {
        replace: true,
        restrict: 'EACM',
        template: '<div class="sCart"><img src="img/cart.png" alt="Items: "/> <span class="quantity">{{cartItems.length}}</span></div>'
    };
});
