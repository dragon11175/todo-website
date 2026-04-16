var screen = document.getElementById("screen");

// run onload 
window.onload = function () {
    displayTasks();
};

//  Display all tasks
function displayTasks() {
    screen.innerHTML = "";

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (item, index) {

        var div1 = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var paragraph = document.createElement("p");
        var h3 = document.createElement("h3");
        var tickmark = document.createElement("input");
        tickmark.type = "checkbox";
        tickmark.checked = item.completed;
        
        tickmark.onchange = function () {
         var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

         tasks[index].completed = tickmark.checked;

         localStorage.setItem("tasks", JSON.stringify(tasks));
             };
        var rmvButton = document.createElement("button");
        var Edit = document.createElement("button");

        // styles
        div1.style.width = "80%";
        div1.style.overflowWrap = "break-word";
        div1.style.color = "red";

        div2.style.width = "20%";
        div2.style.display = "flex";
        div2.style.justifyContent = "space-between";

        div3.style.display = "flex";

        // classes
        paragraph.className = "taskRename1";
        h3.className = "taskNewDate";

        // data
        paragraph.innerText = item.task;
        h3.innerText = item.date;

        rmvButton.innerText = "Remove";
        Edit.innerText = "Edit";

        //  IMPORTANT: index pass karo
        rmvButton.onclick = function () {
            removeTask(index);
        };

        Edit.onclick = function () {
            editTask(index);
        };

        // append
        div1.appendChild(paragraph);
        div2.appendChild(h3);
        div2.appendChild(tickmark);
        div2.appendChild(rmvButton);
        div2.appendChild(Edit);

        div3.appendChild(div1);
        div3.appendChild(div2);

        screen.appendChild(div3);
    });
}

//  Add Task
function addtask() {
    var task = document.getElementById("task").value;
    var date = document.getElementById("date").value;

    if (task === "" || date === "") {
        alert("Enter task and date");
        return;
    }

    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push({
        task: task,
        date: date,
        completed:flase
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();

    // clear input
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
}

//  Delete Task (Index Based)
function removeTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.splice(index, 1); //  remove by index

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
}

// Edit Task
function editTask(index) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    var newTask = prompt("Edit task:", tasks[index].task);
    var newDate = prompt("Edit date:", tasks[index].date);

    if (newTask !== null && newDate !== null) {
        tasks[index].task = newTask;
        tasks[index].date = newDate;

        localStorage.setItem("tasks", JSON.stringify(tasks));

        displayTasks();
    }
}
