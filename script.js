// script.js
// Section 1: TODOs
// TODO: Register submissions from the user on the form.
// TODO: Determine the value of the data submitted and add it to a JavaScript array calle
// TODO: Call the render function to update the table with the new tasks.

//Section 2: App State Variables
let tasks = [];

//Section 3 Cached Element References
const taskForm = document.getElementById("taskForm");
const taskTable = document.getElementById("taskTable");

console.log(taskForm);
console.log(taskTable);

//function to handle submissions
const handleSubmission = event => {
    event.preventDefault();

    // TODO: Get form input values
    const taskName = document.getElementById("taskName").value;
    const taskDescription = document.getElementById("taskDescription").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    
    // TODO: Validate input fields
    if (taskName === "" && taskDeadline === "") {
        alert("Task name and deadline are required!");
        return;
    }
    
    // TODO: Update the tasks array
    tasks.push({ name: taskName, description: taskDescription, deadline: taskDeadline});
    
    render();
}

//function to render tasks in the table
const render = () => {
    // TODO: Use array methods to create a new table row of data for each item in the arr
    taskTable.innerHTML = tasks.map(task => `
    <tr>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${task.deadline}</td>
        <td><button onclick="markTaskComplete(this)">Complete</button></td>
        <td><button onclick="removeTask(this)">Remove</button></td>
    `).join('');
}

//function to initialize the table
const init = () => {
    taskTable.innerHTML = ''; //clear the table
    tasks = []; //resets the tasks array
    render(); //call the render function
}