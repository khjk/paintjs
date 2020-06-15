const body = document.querySelector("body");
const background = body.querySelector(".background");
const IMG_NUMBER = 8;


function paintImage(imgNumber){
	const imageUrl = `images/${imgNumber + 1}.jpg`;
	console.log(imageUrl);
	background.style.backgroundImage = 'url(' + imageUrl + ')';
}

function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;
}

function init(){
	const randomNumber = genRandom();
	paintImage(randomNumber);
}
init();