// var app = angular.module('myApp', ['pascalprecht.translate', 'bootstrapLightbox', 'app.home']);
angular.module('myApp', [
    'pascalprecht.translate',
    'bootstrapLightbox',
    'app.home'
])

.config(['$translateProvider', function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'resources/translate/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('ru');

    }
])



.directive('colorbox', function() {
    return {
        restrict: 'AC',
        link: function (scope, element, attrs) {
            $(element).colorbox({ rel: 'group1', transition: "elastic", width: "50%", height: "50%" });
        }
    };
});


