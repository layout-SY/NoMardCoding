const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

let toDos = [];

function saveToDos() {
	localStorage.setItem('toDos', JSON.stringify(toDos));
}

function paintTodo(nweTodoObj) {
	const li = document.createElement('li');
	li.id = nweTodoObj.id;
	const span = document.createElement('span');
	span.innerText = nweTodoObj.text;
	const button = document.createElement('button');
	button.innerText = '🗑️';
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function handleTodoSubmit(event) {
	event.preventDefault();
	console.log(todoInput.value);
	const newTodo = todoInput.value;
	todoInput.value = '';
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	console.log(newTodoObj);
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveToDos();
}

function deleteTodo(event) {
	//이걸 통해 어떤 위치의 li의 span이 제거 대상인 지 버튼에게 알려줌
	const li = event.target.parentElement;

	//filter는 해당 함수에 대한 true로 return 값만 모아 새로 array를 생성하는 역할
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
	li.remove();
}

todoForm.addEventListener('submit', handleTodoSubmit);
const savedTodos = localStorage.getItem('toDos');

if (savedTodos) {
	const parsedToDos = JSON.parse(savedTodos);
	toDos = parsedToDos;
	parsedToDos.forEach((element) => {
		paintTodo(element);
	});
}

function Filter(element, li_id) {
	if (li_id == element.id) return localStorage.removeItem(li_id);
}
