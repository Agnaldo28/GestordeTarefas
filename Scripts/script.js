//Select elements

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

//Funtions

const saveTodo = (text) =>{
     
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = "<i class='fa-solid fa-check btn btn-success'></i>";
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    doneBtn.innerHTML = "<i class='fa-solid fa-pen btn btn-warning'></i>";
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    doneBtn.innerHTML = "<i class='fa-solid fa-xmark btn btn-danger'></i>";
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo); 
    

    todoInput.value= "";
    todoInput.focus();
    //console.log(todo);
    
};


const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if(todoTitle.innerText == oldInputValue){
            todoTitle.innerText = text;
        }

    });
}


// ACTIONS / EVENTS 

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputvalue = todoInput.value;

    if(inputvalue){
        saveTodo(inputvalue);
        //console.log(inputvalue);
    }
});

 document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closet("div");
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){
        todoTitlr = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.classList.remove();
    }

    if(targetEl.classList.contains("edit-todo")) {
        toggleForms();
    }

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
 });

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms(); 
})

editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const editInputvalue = editInput.value

    if(editInputvalue){
        updateTodo(editInputvalue)
    }
    toggleForms();
});







