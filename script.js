// Tableau pour stocker les contacts
var contacts = [];

function addContact() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var name = nameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;

  if (name !== "" && email !== "" && phone !== "") {
    var contact = {
      name: name,
      email: email,
      phone: phone
    };

    contacts.push(contact);
    displayContacts();

    // Réinitialiser les champs du formulaire
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
  }
}

function displayContacts() {
  var contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "";

  if (contacts.length === 0) {
    contactsList.innerHTML = "<p>Aucun contact trouvé.</p>";
  } else {
    for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
      var contactHtml =
        "<div class='contact'>" +
        "<h3>" + contact.name + "</h3>" +
        "<p><strong>Adresse e-mail:</strong> " + contact.email + "</p>" +
        "<p><strong>Numéro de téléphone:</strong> " + contact.phone + "</p>" +
        "</div>";
      contactsList.innerHTML += contactHtml;
    }
  }
}

// Récupérer le bouton "Ajouter le contact" et lui attribuer la fonction addContact() lorsqu'il est cliqué
var addContactBtn = document.getElementById("addContactBtn");
addContactBtn.addEventListener("click", addContact);
