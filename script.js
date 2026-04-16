var screen=document.getElementById("screen");

//edit button function
function edit(here){
    var a = prompt("Rename your new task:");
    var b = prompt("Enter your new date");
    var parent1=here.parentElement.parentElement;
    var parent=here.parentElement;
    var newTask=parent1.querySelector(".taskRename1");
    var newDate=parent.querySelector(".taskNewDate");
    newTask.innerText=a;
    newDate.innerText=b;
        
    }

//remove button function
function remove(here){
    here.parentElement.parentElement.remove();
}

function addtask(){
    
    var task=document.getElementById("task").value;
    var date=document.getElementById("date").value;
    
    //local storage save task and data
    
    var tasks=JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.push({
        task:task,
        date:date
    });
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
    //create elements to add in screen
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var paragraph=document.createElement("p");
    var h3=document.createElement("h3");
    var tickmark=document.createElement("input");
    tickmark.type="checkbox";
    var rmvButton=document.createElement("button");
    var Edit=document.createElement("button");
    
    //stye in elements
    div1.style.width="80%";
    div1.style.overflowWrap="break-word";
    div1.style.color="red";
    div2.style.width="20%";
    div2.style.display="flex";
    div2.style.justifyContent="space-between";
    div3.style.display="flex";
    rmvButton.setAttribute("onclick","remove(this)");
    rmvButton.setAttribute("class","removeButton");

    Edit.setAttribute("onclick","edit(this)");
    Edit.setAttribute("class","editButton");
    
    paragraph.setAttribute("class","taskRename1");
    h3.setAttribute("class","taskNewDate")
    
    //put essential values in elements of div
    paragraph.innerText=task;
    h3.innerText=date;
    rmvButton.innerText="remove";
    Edit.innerText="Edit";
    
    //add elements in div
    div1.appendChild(paragraph);
    div2.appendChild(h3);
    div2.appendChild(tickmark);
    div2.appendChild(rmvButton);
    div2.appendChild(Edit);
    
    div3.appendChild(div1);
    div3.appendChild(div2);
    //div add in screen
    screen.appendChild(div3);
    
}