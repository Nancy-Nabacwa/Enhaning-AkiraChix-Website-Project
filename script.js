const todo_input_field = document.getElementById("todo_input_field");

const task_container = document.getElementById("task_container");

function addTask(){
    if(todo_input_field.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todo_input_field.value;
        task_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    todo_input_field.value = '';
    saveTasks();
}

task_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTasks();
    } 
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveTasks(){
    localStorage.setItem("data",task_container.innerHTML);
}

function showTasks(){
    task_container.innerHTML = localStorage.getItem("data");
}
showTasks();

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// window.addEventListener('load', () =>{
//     todos = JSON.parse(localStorage.getItem('todos'))||[];
//     const nameInput = document.querySelector('#name');
//     const newTodoForm = document.querySelector('new-todo-form');

//     const username = localStorage.getItem('username') || '';

//     nameInput.value = username;

//     nameInput.addEventListener('change',e=>{
//         localStorage.setItem('username', e.target.value);

//     })

//     newTodoForm.addEventListener('submit' , e => {
//         e.preventDefault();

//         const todo = {
//             content: e.target.elements.content.value,
//             category: e.target.elements.category.value,
//             done: false,
//             createdAt: new Date().getTime()
//         }

//         todos.push(todo);

//         localStorage.setItem('todos',JSON.stringify(todos));

//         e.target.reset();

//         DisplayTodos();
//     })

//     DisplayTodos();   

// })

// function DisplayTodos(){
//     const todoList = document.querySelector('#todo_list');

//     todoList.innerHTML = '';

//     todos.forEach(todo => {
//         const todoItem = document.createElement('div')
//         todoItem.classList.add('todo_item')

//         const label = document.createElement('label');
//         const input = document.createElement('input');
//         const span = document.createElement('span');
//         const content = document.createElement('div');
//         const actions = document.createElement('div');
//         const edit = document.createElement('button');
//         const deleteButton = document.createElement('button');

//         input.type = 'checkbox';
//         input.checked = todo.done;
//         span.classList.add('bubble');

//         if(todo.category =='personal'){
//             span.classList.add('personal');
//         }
//         else{
//             span.classList.add('classroom')
//         }

//         content.classList.add('todo_content');
//         actions.classList.add('actions');
//         edit.classList.add('edit');
//         deleteButton.classList.add('delete');

//         content.innerHTML = `<input type="text" value="${todo.content}" readonly
//         >`;

//         edit.innerHTML = 'Edit';
//         deleteButton.innerHTML = 'Delete';

//         label.appendChild(input);
//         label.appendChild(span);
//         actions.appendChild(edit);
//         actions.appendChild(deleteButton);
//         todoItem.appendChild(label);
//         todoItem.appendChild(content);
//         todoItem.appendChild(actions);

//         todoList.appendChild(todoItem);

//         if(todo.done){
//             todoItem.classList.add('done');
//         }

//         input.addEventListener('click' , e =>{
//             todo.done = e.target.checked;
//             localStorage.setItem('todos', JSON.stringify(todos));

//             if(todo.done){
//                 todoItem.classList.add('done');
//             }
//             else{
//                 todoItem.classList.remove('done');
//             }
//         })
//     });
// }

