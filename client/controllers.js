angular.module('storeApp.controllers', [])
.controller('WelcomeController', ['$scope', 'SEOService', function($scope, SEOService,) {
    SEOService.setSEO({
        title: 'Covalence Store',
        url: $location.url(),
        description: 'Welcome to the Covalence Store'
    })
}])
.controller('ApparelController', ['$scope', 'Apparel', 'SEOService', '$location', function($scope, Apparel, SEOService, $location) {
    $scope.apparels = Apparel.query();

    SEOService.setSEO({
        title: 'Covalance Store - Apparel',
        url: $location.url(),
        description: 'Covalence Store - Apparel'
    })
}])
.controller('MiscController', ['$scope', 'Misc', 'SEOService', '$location', function($scope, Misc, SEOService, $location) {
    $scope.miscs = Misc.query();

    SEOService.setSEO({
        title: 'Covalence Store - Misc',
        url: $location.url(),
        description: 'Covalence Store - Misc'
    })
}])
.controller('ProductController', ['$scope', 'Product', 'SEOService', '$location', '$routeParams', function($scope, Product, SEOService, $location, $routeParams) {
    $scope.product = Product.get({id: $routeParams.id});

    SEOService.setSEO({
            title: $scope.product.title,
            url: $location.url(),
            description: 'Covalence Store'
    });

}]);
