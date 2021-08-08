const body = document.querySelector("body");
const loginBtn = document.querySelector("#login");
const signBtn = document.querySelector("#sign_btn");
const activeMain = document.querySelector("#active");
const logForm = document.querySelector("#log form");
const signForm = document.querySelector("#sign_up");


const loginFunction = () => {
	// alert("Login");
		signForm.style.display = "none"
		logForm.style.display = "block";
	// 	logForm.style.display = "none";	
	// }
	
}

const signFunction = () => {
	// alert("Sign up");
	// if(signBtn.style.display == "none"){
	// 	signBtn.style.display = "block";
	// } else {
	// 	signBtn.style.display = "block";	
	// }

	logForm.style.display = "none";
	signForm.style.display = "block";
}

loginBtn.addEventListener("click",loginFunction);
signBtn.addEventListener("click",signFunction);