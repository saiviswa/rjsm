var rjsmApp = angular.module('rjsmApp', ['uiRouterStyles']);

//Route Definition
rjsmApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: "/home",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/landing_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/landing.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/main.css'
                }
            })
            .state('real-estate', {
                url: "/real-estate",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/real_estate_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/real_estate.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/real_estate.css'
                }
            })
            .state('interior-design', {
                url: "/interior-design",
                views: {
                    "headerContent": {
                        templateUrl: "views/layout/header.html"
                    },
                    "imageContent": {
                        templateUrl: "views/partial/interior_image.html"
                    },
                    "mainContent": {
                        templateUrl: "views/partial/interior.html"
                    },
                    "footerContent": {
                        templateUrl: "views/layout/footer.html"
                    }
                },
                data: {
                    css: 'assets/css/interior.css'
                }
            });
        $urlRouterProvider.otherwise("home");
    }

]).run(['$state', '$rootScope',
    function($state, $rootScope) {
        $rootScope.$on('$stateChangeStart', 
            function(event, toState, fromState) {
                $rootScope.fromState = fromState;
                $rootScope.toState = toState;
                $rootScope.curPage = toState.name;
            }
        );
    }
]);
