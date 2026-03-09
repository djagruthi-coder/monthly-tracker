let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const daysInMonth = new Date(year, month + 1, 0).getDate();

const table = document.getElementById("tracker-table");

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTable(){

    table.innerHTML="";

    const headerRow=document.createElement("tr");

    const taskHeader=document.createElement("th");
    taskHeader.innerText="Task";
    headerRow.appendChild(taskHeader);

    for(let i=1;i<=daysInMonth;i++){
        const th=document.createElement("th");
        th.innerText=i;
        headerRow.appendChild(th);
    }

    const progressHeader=document.createElement("th");
    progressHeader.innerText="Progress";
    headerRow.appendChild(progressHeader);

    const deleteHeader=document.createElement("th");
    deleteHeader.innerText="Delete";
    headerRow.appendChild(deleteHeader);

    table.appendChild(headerRow);


    tasks.forEach((task,taskIndex)=>{

        const row=document.createElement("tr");

        const taskName=document.createElement("td");
        taskName.innerText=task.name;
        row.appendChild(taskName);

        let completed=0;

        for(let day=0;day<daysInMonth;day++){

            const cell=document.createElement("td");

            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            checkbox.checked=task.days?.[day] || false;

            checkbox.addEventListener("change",()=>{
                task.days[day]=checkbox.checked;
                saveTasks();
                renderTable();
            });

            if(checkbox.checked) completed++;

            cell.appendChild(checkbox);
            row.appendChild(cell);
        }

        const progressCell=document.createElement("td");

        const percent=Math.round((completed/daysInMonth)*100);

        progressCell.innerText=percent+"%";
        row.appendChild(progressCell);


        const deleteCell=document.createElement("td");

        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";

        deleteBtn.onclick=()=>{
            tasks.splice(taskIndex,1);
            saveTasks();
            renderTable();
        };

        deleteCell.appendChild(deleteBtn);
        row.appendChild(deleteCell);

        table.appendChild(row);

    });
}


function addTask(){

    const input=document.getElementById("taskInput");
    const newTask=input.value.trim();

    if(newTask===""){
        alert("Enter a task first");
        return;
    }

    const taskObject={
        name:newTask,
        days:new Array(daysInMonth).fill(false)
    };

    tasks.push(taskObject);

    saveTasks();

    input.value="";

    renderTable();
}

renderTable();


