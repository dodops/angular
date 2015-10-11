app.controller('newContactCtrl', function ($scope, contactsAPI, $location, operadoras) {
    $scope.operadoras = operadoras.data;

    $scope.addContact = function (contact) {
    contactsAPI.saveContact(contact).success(function(data){
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      $location.path("/contacts");
    });
  };
});