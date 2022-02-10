

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


var database = firebase.database();
var storage = firebase.storage();
var storageRef = storage.ref(); //references the storage bucket of my firebase system


// GETTING & DISPLAYING IMAGES
function addImage() {

    var date = new Date();
    var [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    // var [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];  
    var fileUploadDate = month.toString() + '-' + day.toString() +  '-' + year.toString()

    var file = document.getElementById('imageFileBtn').files[0]
    var name = fileUploadDate + '-' + file.name
    var metadata = { contentType: file.type }
    console.log(file)
    console.log(name)

    var storageRef = firebase.storage().ref("Team Files/Images");
    console.log(storageRef)
    var task = storageRef.child(name).put(file, metadata)
    alert("File Added")

    task.then(snapshot => snapshot.ref.getDownloadURL()).then((url) => {
            console.log(url)
            // document.getElementById("recentUpload").src = url
            // var displayRecent = document.getElementById("recentUpload")
            // displayRecent.innerHTML = ` <img src="${url}" style="color: black; padding: 2%; max-height: 50%; max-width: 50%;"/> `;
            // getImages()

        }).catch(function(error) {
            // Handle errors here
        })
    }


 function getImages() {
    console.log("getting images")

    // Create a Reference to file folder:
    var storageRef = firebase.storage().ref("Team Files/Images");

    // Now we get the references of these images
    storageRef.listAll().then(function(result) {
        result.items.forEach(function(imageRef) {            
            // And finally display them Images(imageRef);
            displayImages(imageRef)
            console.log(imageRef)
        });
    }).catch(function(error) {
        // Handle errors here
    })
}

function displayImages(imageRef) {
    var imageDisplay = document.getElementById("imageDisplay");

    dataSTR = ""

    imageRef.getDownloadURL().then(function(url) {
        document.getElementById('imageDisplay').src = url
        console.log(url)
        imageCard = createImageCard(url)
        dataSTR = dataSTR + imageCard

    }).then(function() {
        imageDisplay.innerHTML = dataSTR 

    }).catch(function(error) {
        // Handle errors here
    }).then(function(imageRefL) {
            for (i = 0; i < imageURL.length; i++) {
              imageURL[i].style.flex = "50%";
            }
    })
}

function createImageCard(imageURL) {

    
    var card = `

        <div class="grid" style="padding-top: 45px">
        <div class="col s8 m6 14">
            <div class="card responsive blue darken-3" style="max-width:750px">
            <span class="card-title">Card Title</span>
            <div class="divider"></div>
            <div class="card-image">
                <img src="${imageURL}" style="max-width:450px; height:auto">
            </div>
            <div class="divider"></div>
            </div>
        </div>          
        </div>
        
    `;

    return card;

}

function logOut() {

    location.href='admin.html';

}
