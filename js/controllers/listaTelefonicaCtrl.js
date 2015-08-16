app.controller("listaTelefonicaCtrl", function($scope, $http, contactsAPI, operadorasAPI){
  $scope.app = "Lista Telefonica";
  $scope.contacts = [];
  $scope.operadoras = [];

  var loadContacts = function(){
    contactsAPI.getContacts().success(function(data){
      $scope.contacts = data;
      console.log(data);
    });
  };

  var loadOperadoras = function(){
    operadorasAPI.getOperadoras().success(function(data){
      $scope.operadoras = data;
      console.log(data);
    });
  };

  $scope.isContactSelected = function(contacts){
    return $scope.contacts.some(function(contact){
      return (contact.selecionado);
    });
  };
  $scope.addContact = function (contact) {
    contactsAPI.saveContact(contact).success(function(data){
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadContacts();
      console.log(data);
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
  loadContacts();
  loadOperadoras();
});
