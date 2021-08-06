const rightSide = document.querySelector(".right-side");
const leftSide = document.querySelector(".left-side");
const log = document.querySelector("#log");
const active = document.querySelector("#active");
const buttonLogin = document.querySelector("#login");
const buttonHome = document.querySelector("#home");
const body = document.querySelector("body");

const imageURI = ["./images/number1.jpg","./images/number2.jpg","./images/number3.jpg"]

buttonLogin.addEventListener("click",(event) => {
	if(rightSide.style.display == "none"){
		rightSide.style.display = "block";
		// buttonLogin.style.backgroundColor = "#fff";
		// buttonLogin.style.color = "#000";
	} else {
		rightSide.style.display = "none";
		// buttonLogin.style.backgroundColor = "rgba(0,0,0,0.6)";
		// buttonLogin.style.color = "#fff";
	}
})

buttonHome.addEventListener("click",(event) => {
	if(log.style.display == "block"){
		log.style.display = "none";
		active.style.display = "block";
		// buttonLogin.style.backgroundColor = "#fff";
		// buttonLogin.style.color = "#000";
	} else {
		log.style.display = "block";
		active.style.display = "none";
		// buttonLogin.style.backgroundColor = "#fff";
		// buttonLogin.style.color = "#000";
	}
})

// function changer(){
// 	let image = Math.floor(Math.random() * imageURI.length);
// 	body.style.backgroundImage = `url(${imageURI[image]})`;
// }

// setInterval(changer,2000);