const form = document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
	SHOWING_CN = "showing";

function saveName(text){
	localStorage.setItem(USER_LS, text);
}
//enter하면 자동으로 새로고침되는 것 방지
function handleSubmit(event){
	event.preventDefault();
	const currentValue = input.value;
	//console.log(currentValue);
	paintGreeting(currentValue);
	saveName(currentValue);
}

//사용자 이름이 존재할때 form창보여주기
function askForName(){ 
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

//사용자 이름이 존재할때 form없애고
function paintGreeting(text){  
	form.classList.remove(SHOWING_CN); 
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello, ${text}!`; 
}

function loadName(){ //로컬 스토리지부터 꺼내옴
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){
		askForName(); //유저가 없을 경우
	}else{
		paintGreeting(currentUser); //유저가 있는 경우
	}
}
function init(){
	loadName();
}
init();