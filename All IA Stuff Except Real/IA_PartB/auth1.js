

const login_form = document.querySelector("#login-form")
const login_nav = document.getElementById("login_nav")
const logout_nav = document.getElementById("logout_nav")
const the_elements_nav = document.getElementById("the_elements_nav")
const learn_more_nav = document.getElementById("learn_more_nav")

login_form.addEventListener('submit',(e) => {
	e.preventDefault() 
	
	console.log(login_form["user_name"].value)
	console.log(login_form["user_password"].value)


	const modal = document.querySelector('#login_modal'); 
	M.Modal.getInstance(modal).close();
	login_form.reset()

});

logout_nav.addEventListener('click',(e) => {

	login_nav.style.display = "block"
	logout_nav.style.display = "none"
	the_elements_nav.style.display = "none"
	learn_more_nav.style.display = "none"
	


});