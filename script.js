document.addEventListener('DOMContentLoaded', function() {
  var user = {
    name: "bakeery",
    age: 21,
    isAdmin: true,
    email: "admin@yaan.org",
    passwd: null,
    address: {
      street: "123 Main St",
      city: "Chennai",
      state: "Tamil Nadu",
      zip: "632015",
    }
  };

  function admin_details() {
    var details = "";
    details += "Name  : " + user.name + "\n";
    details += "Email : " + user.email + "\n";
    details += "passwd: " + (user.passwd || "null") + "\n";
    details += "Addres: " + user.address.street + "\n";
    details += "City  : " + user.address.city + "\n";
    details += "State : " + user.address.state + "\n";
    details += "Zip   : " + user.address.zip + "\n";
    return details;
  }

  var validate = function(name, email) {
    return (name === user.name && email === user.email);
  };

  document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById("name").value.trim();
    var emailaddress = document.getElementById("email").value.trim();

    var validated = validate(username, emailaddress);
    var isAdminChecked = document.getElementById('rdbtn').checked;

    if (isAdminChecked && validated) {
      var adminDetails = admin_details();
      var newWindow = window.open('', '_blank');
      newWindow.document.write('<html><head><title>Admin Details</title></head><body>');
      newWindow.document.write('<h1>Admin Details</h1>');
      newWindow.document.write('<pre>' + adminDetails + '</pre>');
      newWindow.document.write('</body></html>');
    } else {
      alert('Access denied');
    }
  });
});
