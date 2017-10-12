angular.module('app.home', [])

    .controller("homeCtrl", function ($scope, $translate, Lightbox) {
        //variable to store selected language
        $scope.tittles = ['home', 'about'];
        $scope.selected = 0;

        $scope.select= function(index) {
            $scope.selected = index;
        };
        $scope.arts = [
            {
                'url': 'resources/images/pic1_b.jpg',
                'thumbUrl': 'pic1'
            },
            {
                'url': 'resources/images/pic2_b.jpg',
                'thumbUrl': 'pic2'
            },
            {
                'url': 'resources/images/pic33_b.jpg',
                'thumbUrl': 'pic3'
            },
            {
                'url': 'resources/images/pic43_b.jpg',
                'thumbUrl': 'pic4'
            },
            {
                'url': 'resources/images/pic53_b.jpg',
                'thumbUrl': 'pic5'
            },
            {
                'url': 'resources/images/pic63_b.jpg',
                'thumbUrl': 'pic6'
            }
        ];

        $scope.changeLang = function (key) {
            $translate.use(key);
        };


        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.arts, index);
        };


    });