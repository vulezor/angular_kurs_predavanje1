(function(){
    angular.module("app", []);
})();

(function(){
    var mainController = function($scope, $timeout){
        $scope.activeBtnIndex = 0;
        
        $scope.btnObjects = [
            {
                label:"Button 1",
                text:"Content for Button 1"
            },{
                label:"Button 2",
                text:"Content for Button 2"
            },{
                label:"Button 3",
                text:"Content for Button 3"
            },{
                label:"Button 4",
                text:"Content for Button 4"
            },{
                label:"Button 5",
                text:"Content for Button 5"
            },{
                label:"Button 6",
                text:"Content for Button 6"
            },{
                label:"Button 7",
                text:"Content for Button 7"
            },{
                label:"Button 8",
                text:"Content for Button 8"
            },{
                label:"Button 9",
                text:"Content for Button 9"
            },{
                label:"Button 10",
                text:"Content for Button 10"
            }
        ];
        
        $scope.setActiveIndex = function ($i){
            $scope.activeBtnIndex = $i;
        }
    };
    mainController.$inject = ['$scope', '$timeout'];
    angular.module("app").controller("mainController", mainController);
})();