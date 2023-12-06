
function addTask(){
    console.log("Adding a task loaded")
    //get input field and task list elements 
    let taskInput = document.getElementById("new-task");
    let incompleteList = document.getElementById("incomplete-tasks");
    let completeTask = document.getElementById("completed-tasks")
    
    //check if input is not empty or contains only white space

    if (taskInput.value != ""){
        //create list item 
        let li = document.createElement("li")
        
        //add task to the list item 
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.name = "name"
        checkbox.value = "value"

        checkbox.setAttribute("onclick", "removeCheckedCheckboxes()" )

   
        let label = document.createElement("label")
        label.appendChild(checkbox)
        label.appendChild(document.createTextNode(taskInput.value))
        
        li.appendChild(checkbox) 
        
        li.appendChild(document.createTextNode(taskInput.value))
    
        let editButton = document.createElement("button")
        editButton.innerText = "Edit";
        editButton.setAttribute("onclick", "editTask()")
        li.appendChild(editButton);

        let deleteButton = document.createElement("button")        
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("onclick", "deleteTask()")
        li.appendChild(deleteButton);
        //display the list item of each task
        incompleteList.append(li)
        

        //clear input field 
        taskInput.value = ""; 
    }
}

function deleteAll(){
    let taskList = document.getElementsByTagName("li");
    for(let i = 0; i < taskList.length; i++){
        taskList[i].remove()
    }
}

function deleteTask(){
    let taskList = document.getElementsByTagName("li");
    for(let i = taskList.length-1; i < taskList.length; i++){
        taskList[i].remove()
    }
}

function editTask() {
    let updateTask = document.createElement("input")
    updateTask.type = "text"
}

function removeCheckedCheckboxes() {
    let taskList = document.getElementsByTagName("li");
    let taskItem = document.activeElement.parentElement
    let completeTask = document.getElementById("completed-tasks")
    console.log(taskItem)
    completeTask.appendChild(taskItem)
    }


function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}