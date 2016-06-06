

var db = localStorage.getItem('data');
db = JSON.parse(db);
var appCustomers = angular.module('appCustomers', []);
appCustomers.controller('mainCtrl', function ($scope) {
  $scope.currentPersonId = -1;
  $scope.db=db;
  console.log(db);
  $scope.addNewPerson = function() {
    if ( $scope.name !== '' ) {
      $scope.db.push({
        name: $scope.name,
        telephone: $scope.telephone,
        email: $scope.email,
        adress: $scope.adress
      });
      $scope.name = '';
      $scope.telephone = '';
      $scope.email = '';
      $scope.adress ='';
    }
  };
  $scope.savePerson = function() {
    if( $scope.currentPersonId > -1 ){
      var id = $scope.currentPersonId;
      $scope.db[id].name = $scope.name;
      $scope.db[id].telephone = $scope.telephone;
      $scope.db[id].email = $scope.email;
      $scope.db[id].adress = $scope.adress;
      $scope.name = '';
      $scope.telephone = '';
      $scope.email = '';
      $scope.adress ='';
      $scope.currentPersonId = -1;
    }
  };
  $scope.editPerson = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.db[id].name;
    $scope.telephone = $scope.db[id].telephone;
    $scope.email = $scope.db[id].email;
    $scope.adress = $scope.db[id].adress;
  };
  $scope.deletePerson = function( id ) {
    $scope.db.splice( id, 1 );
  };
  $scope.adressPerson = function ( id ) {

  };
});



// app.directive('list', function () {
//   return {
//     restrict: 'E',
//     templateUrl: "templ",
//     link: function (scope, element, attrs) {
//       scope.db = db;
//     }
//   };
// });
