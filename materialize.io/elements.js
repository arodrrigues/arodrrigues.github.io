
var cUser = null
const runButton = document.getElementById("run_Button")

auth.onAuthStateChanged(user => {
	console.log(">>>Elements",user)
	//Anything user related that happens when page is loaded needed here
	cUser = user
	
	if (user == null && window.location.href != "http://localhost:8000/index.html") {
		window.open("http://localhost:8000/index.html","_self")
		
	}



});

//An event that needs user can be written here.  The time it takes you
//to click the button the onAuthStateChanged function will complete and you 
//Will have current user
console.log("Always NULL!: ",cUser)


runButton.addEventListener("click",(e) => {

	console.log("CLIKCKED",cUser)

});