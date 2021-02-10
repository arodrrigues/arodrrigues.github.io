const login_form = document.querySelector("#login_form")
const login_nav = document.getElementById("login_nav")
const logout_nav = document.getElementById("logout_nav")
const elements_nav = document.getElementById("elements_nav")
const elements_game_nav = document.getElementById("elements_game_nav")

//Parallel Array Strcutures
users = ["user1","user2","user3"]
pwords = ["pword1","pword2","pword3"]
cuser = ""




login_form.addEventListener('submit', (e) => {


	e.preventDefault()

	uname = login_form["user_name"].value
	pword = login_form["user_password"].value

	console.log(uname)
	console.log(pword)


	//Option 1: Verify against a predefined list - for learning
	//Cross check credentials against a list in web page

	//Task: 
	//Write a loop that checks that uname and pword match.  If they match
	//"login" the user by changing the nav bar display. 

	for (i = 0; i < users.length; i = i + 1) {

		if (users[i] == uname) {

			if (pwords[i] == pword) {
				logout_nav.style.display = "block"
				elements_nav.style.display = "block"
				elements_game_nav.style.display = "block"
				login_nav.style.display = "none"
				cuser = users[i]
			}
			else {
				alert("Invalid User")
				break;
			}
		}
	}


	const modal = document.querySelector('#login_modal')
	M.Modal.getInstance(modal).close();

});

//add an event listener to logout_nav
//In teh function swap the display of the various element
logout_nav.addEventListener('click', (e) => {
	console.log(e)
	logout_nav.style.display = "none"
	elements_nav.style.display = "none"
	elements_game_nav.style.display = "none"
	login_nav.style.display = "block"

});
