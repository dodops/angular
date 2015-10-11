app.factory("contactsAPI", function($http){
  var _getContacts = function(){
    return $http.get("https://fierce-refuge-6322.herokuapp.com/contacts");
  };

  var _saveContact = function(contact){
    return $http.post("https://fierce-refuge-6322.herokuapp.com/contacts", contact);
  };
  return {
    getContacts: _getContacts,
    saveContact: _saveContact
  }
});
