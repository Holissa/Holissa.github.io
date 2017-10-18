angular.module('app.home', [])

    .controller("homeCtrl", function ($scope, $translate, Lightbox, $http) {
        //variable to store selected language
        $scope.tittles = ['home', 'about'];
        // $scope.selected = 0;
        // $scope.name = null;
        // $scope.mail = null;
        // $scope.message = null;
        // $scope.subject = null;

        // $scope.sendEmail = function (a,b,c) {
        //     var mailData = {
        //         to: 'golympetr@gmail.com',
        //         subject: b,
        //         text: c}
        //
        //     $http.post('/sendemail', mailData).success(function(data){
        //         if(data.status == 'success'){
        //             console.log("Email send successfully");
        //         }
        //         else{
        //             console.log("Some error occour while sending email");
        //         }
        //     });
        // };


        $scope.result = 'hidden';
        $scope.resultMessage;
        $scope.formData; //formData is an object holding the name, email, subject, and message
        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function(contactform) {
            console.log(contactform);
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;

                $http({
                    method  : 'POST',
                    url     : 'send.php',
                    data    : $.param(contactform),  //param method from jQuery

                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
                }).then(function(data){
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-danger';
                    }
                });

        };
    








        $scope.$watch("name", function () {
            console.log("**** reference checkers $watch ****")
        });

        $scope.select = function (index) {
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