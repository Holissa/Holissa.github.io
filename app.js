angular.module('myApp', [
    'pascalprecht.translate',
    'ui.router',
    'bootstrapLightbox',
    'app.home'
])

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/translate/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('ru');

    }
    ])


    .component('myHeader', {
        templateUrl: 'components/header.html',
        controller: 'homeCtrl'
    })

    .component('myFooter', {
        templateUrl: 'components/footer.html',
        controller: 'homeCtrl'
    })

    .component('sticker', {
        templateUrl: 'components/sticker.html',
        controller: 'homeCtrl'
    })
    
    

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise("/home");
        $stateProvider

            .state('home', {
                url: "/home",
                templateUrl: "views/home/home.html"
            })
            .state('about', {
                url: '/about',
                templateUrl: "views/about/about.html"
                // controller: 'aboutController'
            });

    })


    .directive('colorbox', function () {
        return {
            restrict: 'AC',
            link: function (scope, element, attrs) {
                $(element).colorbox({rel: 'group1', transition: "elastic", width: "50%", height: "50%"});
            }
        };
    });


