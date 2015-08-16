angular.module("listaTelefonica").service("operadorasAPI", function($http){
  this.getOperadoras = function(){
    return $http.get("https://fierce-refuge-6322.herokuapp.com/operadoras");
  };
});
