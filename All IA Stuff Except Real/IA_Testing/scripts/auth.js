
const firebaseConfig = {
    apiKey: "AIzaSyAamxo5rKNtOZ-Xd76WVQcVV5rIa3wqReo",
    authDomain: "y-12iatesting.firebaseapp.com",
    projectId: "y-12iatesting",
    storageBucket: "y-12iatesting.appspot.com",
    messagingSenderId: "597466180042",
    appId: "1:597466180042:web:4d580b048bbb25503f4733",
    measurementId: "G-FETW9JFEW4"
  };


  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();

  // update firestore settings
  db.settings({ timestampsInSnapshots: true});

// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up the user (method)
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        // close the signup modal and reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })
})