
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
   
  $scope.cleanValue = function() {
 
    if( $scope.selectControl == 1){
      $scope.t2 = null;
     
    }
   
};

$scope.reserve = function(){

 if($scope.selectControl == 1){
  Swal.fire({
    icon: 'info',
    title: 'Vuelo reservado',
    text: 'Ha reservado un vuelo de ida el: ' + moment($scope.t1).format("DD MMM YYYY")
  })
 }

 if($scope.selectControl == 2){
  Swal.fire({
    icon: 'info',
    title: 'Vuelo reservado',
    text: 'Ha reservado un vuelo de ida y regreso del: ' + moment($scope.t1).format("DD MMM YYYY") + " al " + moment($scope.t2).format("DD MMM YYYY")
  })
 }


  
}

});
/*$(document).ready(function(){

  $("#sel1").change(function(){
    //alert($("#sel1").val());
    if($("#sel1").val() == "1"){
      oneWayFligth();
    }

    if($("#sel1").val() == "2"){
      returnFligth();
    }


    
  });



  });


  function oneWayFligth(){
    alert("oneWay");
    $('#T2').attr('readonly', true);
  }
  
  function returnFligth(){
    alert("return");
    $('#T2').attr('readonly', false);
  }
  */