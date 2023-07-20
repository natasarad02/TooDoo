// Getting elements

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Delete task
function deleteTask(event)
{
    const listItem = event.target.closest('li');
    todoList.removeChild(listItem);
}

// Edit task
function editTask(event)
{
    const listItem = event.target.closest('li');
    const label = listItem.querySelector('.todo-item-label');
    const current = label.textContent;
    const newDesc = prompt('Edit...');

    if(newDesc)
    {
        label.textContent = newDesc;
    }

}

// Create a new task

addBtn.addEventListener('click', () => {
    const taskDescription = todoInput.value;
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.className = 'todo-item-label';
    label.textContent = taskDescription;
    
   
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.addEventListener('click', editTask);




    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', deleteTask);

   
    
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

   
    

    todoList.appendChild(listItem);

    todoInput.value = '';

});

// Clock, date, time

function updateClock()
{
    const clock = document.getElementById('clock');
    const date = new Date();
    const options = {
       
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'

    };

    const formattedClock = date.toLocaleTimeString(undefined, options);
    clock.textContent = formattedClock;

    
    
}
function updateDate()
{
    const dateContainer = document.getElementById('date');
    const date = new Date();
    const options = {

        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const formattedDate = date.toLocaleDateString(undefined, options);
    dateContainer.textContent = formattedDate;
}

updateClock();
updateDate();
setInterval(updateClock, 1000);
setInterval(updateDate, 1000);