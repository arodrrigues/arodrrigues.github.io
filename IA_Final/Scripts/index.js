
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
      // show account info
      db.collection('users').doc(user.uid).get().then(doc => {
        const html = `
        <div>Logged in as ${user.email}</div>
        <div>${doc.data().fullName}</div>
      `;
      accountDetails.innerHTML = html;
    });
  
      // toggle UI elements
      loggedInLinks.forEach(item => item.style.display = 'block');
      loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
      // hide account info
      accountDetails.innerHTML = '';
      // toggle UI elements
      loggedInLinks.forEach(item => item.style.display = 'none');
      loggedOutLinks.forEach(item => item.style.display = 'block');
    };
  };

function gallery() {

    location.href='gallery.html';

}

function myart() {

  location.href='myart.html';

}

// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });