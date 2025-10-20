

let todoItemContainer = document.getElementById("todosItemsContainer")
let addTodoButton = document.getElementById("addTodoButton")

function  AddTodoItem(){
    let userInputEle = document.getElementById("userInput")
    let userInputValue = userInputEle.value
    if (userInputValue===""){
        alert("Enter the value")
        return
    }
    todolistCount = todolist.length 
    let newTodo = {
        text: userInputValue,
        id: todolistCount+1
    }
    createAndAppendTodo(newTodo)
}

addTodoButton.onclick=function() {
    AddTodoItem()
}

let todolist = [
    {
        text: "Learn Html",
        id: 1
    },
    {
        text: "Learn Css",
        id: 2
    },
    {
        text: "Learn Javascript",
        id: 3
    }
]

 function onDeleteTodo(todoId) {
    let deleteEleTodo =document.getElementById(todoId)
    todoItemContainer.removeChild(deleteEleTodo)
 }

 function onTodoStatusChange(checkboxId, labelId){
    let CheckBoxEle = document.getElementById(checkboxId)
    let labelEle = document.getElementById(labelId)
    if (CheckBoxEle.checked){
        labelEle.classList.add("checked")
    }else{
        labelEle.classList.remove("checked")
    }
 }
function createAndAppendTodo(todo){
    let checkboxId= "checkbox"+todo.id
    let labelId= "label"+todo.id
    let todoId= "todo"+todo.id

    let todoElement = document.createElement('li')
    todoElement.classList.add("todo-item-container","d-flex","flex-row")
    todoElement.id = todoId
    todoItemContainer.appendChild(todoElement)
 
    let inputElement = document.createElement('input')
    inputElement.type='checkbox'
    inputElement.id= checkboxId
    inputElement.classList.add('checkbox-input')
    inputElement.onclick=function() {
        onTodoStatusChange(checkboxId, labelId)
    }

    todoElement.appendChild(inputElement)

    let labelContainer = document.createElement("div")
    labelContainer.classList.add("label-container", "d-flex", "flex-row")
    todoElement.appendChild(labelContainer)

    let labelElement = document.createElement("label")
    labelElement.setAttribute("for", checkboxId)
    labelElement.classList.add("checkbox-label")
    labelElement.textContent=todo.text
    labelElement.id=labelId
    labelContainer.appendChild(labelElement)


    let divContainer = document.createElement("div")
    divContainer.classList.add("delete-icon-container")
    labelContainer.appendChild(divContainer)

    let delteElement = document.createElement('i')
    delteElement.classList.add('far', "fa-trash-alt", "delete-icon")
    delteElement.onclick=function() {
        onDeleteTodo(todoId)
    }
    divContainer.appendChild(delteElement)

}

for (let eachItem of todolist) {
    createAndAppendTodo(eachItem)
}


