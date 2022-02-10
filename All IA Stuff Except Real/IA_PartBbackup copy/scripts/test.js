

const firebaseConfig = {
    apiKey: "AIzaSyDHjaD6qSuvOM0Yvhygzm8ZmQG5Ieki9OM",
    authDomain: "y12-ia.firebaseapp.com",
    projectId: "y12-ia",
    storageBucket: "y12-ia.appspot.com",
    messagingSenderId: "38166161201",
    appId: "1:38166161201:web:fef8711903cf3529d63210",
    measurementId: "G-L8MC5QRRX4"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
var database = firebase.database();

const accountDetails = document.querySelector('.account-details')


auth.onAuthStateChanged(user => {
    if (user) {
        database.collection('guides').onSnapshot(snapshot => {
            setupUI(user);
        });
    }
    else {
        setupUI();
    }
})

const setupUI = (user) => {

    if (user) {
        const html = `
            <div>Logged in as ${user.email}</div>
        
        `;
        accountDetails.innerHTML = html
    }

}



