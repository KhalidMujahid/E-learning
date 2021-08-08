const logBtn = document.querySelector("#a_mobile1");
const signBtn = document.querySelector("#a_mobile");
const formLog = document.querySelector("#log");
const formSign = document.querySelector("#sign_up");

const logFunc = (event) => {
	event.preventDefault()
	formSign.style.display = "none";
	formLog.style.display = "block";
}

const signFunc = () => {
	event.preventDefault()
	formSign.style.display = "block";
	formLog.style.display = "none";
}


logBtn.addEventListener("click",logFunc);
signBtn.addEventListener("click",signFunc);
