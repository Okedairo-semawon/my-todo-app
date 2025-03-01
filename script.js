
// const addBtn  = document.getElementById("addButton");
// const taskList = document.getElementById("todoList");
// const inputTask = document.getElementById("todoTask");

// function addBtn() {
//     // trim the value inside the plaaceholder
//     const task = inputTask.Value.trim();

//     if (task) {
//         createTaskElement(task);
//         inputTask.value = " ";
//     }else {
//         alert("Please enter a task!")
//     }

// }
// addButton.addEventListener('click', addBtn);

// adds the LI element to the taskList 
// function createTaskElement(task) {
//     const listItem = dosument.createElement('li');
//     listItem.textContent = task;
//     taskList.appendChild(listItem);
// }

// document.addEventListener('DOMContentLoaded', function()  {
//     loadTasks();
// }



// let allTodos = getTodos();
// updateTodoElemement()

// listContainer.addEventListener('submit', function(e) {
//     e.preventDefault();
// })

// function addTask () {
//     // trim the value inside the placeholder
//     const task = InputField.value.trim();

//     if (task.lenght > 0) {

//         const todoObject = {
//             text: task,
//             completed: false
//         }
//         allTodos.push(todoObject)
//         updateTodoElemement()
//         saveTodos();
//         // CreateTaskElement(task)
//         InputField.value = ""
//     } else {
//         alert('please enter a task!')
//         return;

//     }
// }  
// function updateTodoElemement () {
//     taskList.innerHTML = ""
//     allTodos.forEach((task, taskIndex) => {
//         todoItem = createTodoItem(task, taskIndex)
//         taskList.append(todoItem)
//     }) 
// }

// function createTaskElement(task, taskIndex) {
//     const listItem = document.createElement('li');
//     const todoText = task.text
//     listItem.className = "task";
//     const taskId = 'task-' + todoIndex
//     listItem.innerHTML = `<input type="checkbox" id="${todoId}">
//     <label for="${todoId}" class="custom-checkbox">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" height="24px" 
//         viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
//         <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 
//         424Z"/></svg>
//     </label>
//     <label for="${todoId}" class="todo-text">
//         ${todoText}
//     </label>
//     <button class="delete-button">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="#4A4D57"
//         height="25px" viewBox="0 -960 960 960" 
//         width="25px" fill="black"><path d="M280-120q-33
//          0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
//          33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
//           0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
//     </button>`
//     // listItem.textContent = task;
//     // todoTask.appendChild(listItem);

//     const deleteButton = document.querySelector('.delete-button');
//     deleteButton.addEventListener("click", () => {
//         deleteTodoItem(todoIndex);

//     })

//     const checkBox = document.querySelector('input')
//     checkBox.addEventListener('change', () => {
//         allTodos[todoIndex].completed = checkBox.checked;
//         saveTodos();
//     })
//     checkBox.checked = task.completed;
//     return  listItem;
// }

// function deleteTodoItem (todoIndex) {
//     allTodos = allTodos.filter((_, i) => i !== todoIndex);
//     saveTodos();
//     updateTodoElemement()

// }
// function saveTodos() {
//     const todosJson = localStorage.setItem("todos", allTodos)
// }
//  function getTodos() {
//     const todos = localStorage.getItem("todos") || "[]";
//     return JSON.parse(todos)
//  }

let todo = JSON.parse(localStorage.getItem('todo')) || [];

const  addBtn = document.querySelector("#addButton");
const taskList =  document.getElementById('todoList');
const inputField = document.getElementById('todoInput');
const listContainer = document.getElementById("container")
const deleteButton =  document.querySelector('.delete-button')

document.addEventListener("DOMContentLoaded", function() {
    addBtn.addEventListener('click', addTask)
    inputField.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    })
    deleteButton.addEventListener('click', deleteAllTask)
    displayTask()
})

// add task function 
function addTask () {
    const newTask = inputField.value.trim()
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false
        })
        saveToLocalStorage()
        inputField.value = ""
        displayTask()
    }
}

function  saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo))
}

// delete task function 
function deleteAllTask () {

}
function  displayTask () {
    taskList.innerHTML = "";
    todo.forEach((item, index) => {
        const p = document.createElement("p")
         p.innerHTML = `
         <input type="checkbox" id="input-${index}">
     <label for="todo-${index}" class="custom-checkbox">
         <svg xmlns="http://www.w3.org/2000/svg" fill="transparent" height="24px" 
         viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
         <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 
         424Z"/></svg>
     </label>
    <label for="todo-${index}" class="todo-text">
         ${item.text}
     </label>
      <button class="delete-button">
         <svg xmlns="http://www.w3.org/2000/svg" fill="#4A4D57"
         height="25px" viewBox="0 -960 960 960" 
         width="25px" fill="black"><path d="M280-120q-33
         0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 
         33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160
           0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
        </button>
        `
        p.querySelector(".custom-checkbox").addEventListener('change', () => {
            toggleTask(index);
        })
        taskList.appendChild(p);
    });
   
}

// function  saveToLocalStorage() {
//     localStorage.setItem("todo", JSON.stringify(todo))
// }
