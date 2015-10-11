app.controller("listaTelefonicaCtrl", function($scope, $http, contacts, operadoras){
  $scope.app = "Lista Telefonica";
  $scope.contacts = contacts.data;
  $scope.operadoras = operadoras.data;

  $scope.isContactSelected = function(contacts){
    return $scope.contacts.some(function(contact){
      return (contact.selecionado);
    });
  };

  $scope.removeContact = function(contact){
    $http.delete("https://fierce-refuge-6322.herokuapp.com/contacts", contact).success(function(data){});
    $scope.contacts = $scope.contacts.filter(function(contact){
      if(!contact.selecionado) return contact;
    });
  };
  $scope.orderByField = function(field){
    $scope.orderCriteria = field;
    $scope.directionSearch = !$scope.directionSearch;
  };
});
