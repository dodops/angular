app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'js/view/contacts.html',
    controller: 'listaTelefonicaCtrl',
    resolve: {
      contacts: function(contactsAPI){
        return contactsAPI.getContacts();
      },
      operadoras: function(operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.when('/newContact', {
    templateUrl: 'js/view/newContact.html',
    controller: 'newContactCtrl',
    resolve: {
      operadoras: function(operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });

  $routeProvider.otherwise({ redirectTo: '/contacts' });
}]);