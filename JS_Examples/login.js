//Take Away:
// 1. notice how JS and Python look very similar
// 2. We typically run JS code through a browser
//          a. Paste JS code right into you terminal
//          B. Run it vias web-page

// JS: let, var, const
var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]

function checkLogin(u, p) {

    val = false //assumes the u and p do not exist

    //Loop through uNames check
    for (i =0; i < uNames.length; i = i + 1) {

        if (uNames[i] === u){

            if (pWords[i] == p){
                val = true;
            }
        }

    }

    return val

}

console.log(checkLogin("user1","pword1")) 
console.log(checkLogin("user1","pword2")) 
console.log(checkLogin("user5","pword5"))