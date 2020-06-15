const toDoForm = document.querySelector(".js-toDoForm"),
	toDoInput = toDoForm.querySelector("input"),
	toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id); //새로운 배열생성
	});
	toDos = cleanToDos;
	saveToDos();
}
//로컬스토리지는 string만 사용가능 -> JSON.stringify
function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
	
}
function paintToDo(text){
	const li = document.createElement("li"); 
	const delBtn = document.createElement("button");
	delBtn.innerHTML = "❌";
	delBtn.addEventListener("click",deleteToDo);
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
			text : text,
			id : newId
	}
	toDos.push(toDoObj);
	saveToDos()
}
//submit이벤트가 발생할떄마다 toDo를 그려준다
function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value=""; //칸비우기
}
//로컬스토리지로부터 ToDos를 가져온다
function loadToDos(){ 
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(function(toDo){ //list항목마다 함수돌림
			paintToDo(toDo.text);
		});
	}
}
function init(){
	loadToDos();
	toDoForm.addEventListener("submit",handleSubmit);
}

init();