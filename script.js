const tasks = [
    "college",
    "leetcode",
    "college work",
    "course",
    "full stack"
]
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const daysInMonth = new Date(year,month+1,0).getDate();
const table = document.getElementById("tracker-table");
const headerRow = document.createElement("tr");
const taskHeader = document.createElement("th");
taskHeader.innerText = "Task";
headerRow.appendChild(taskHeader);


for (let day = 1; day <= daysInMonth; day++) {
  const dayCell = document.createElement("th");
  dayCell.innerText = day;
  headerRow.appendChild(dayCell);
}


table.appendChild(headerRow);
for (let i = 0; i < tasks.length; i++) {
  const row = document.createElement("tr");
  const taskCell = document.createElement("td");
  taskCell.innerText = tasks[i];
  row.appendChild(taskCell);
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    cell.appendChild(checkbox);
    row.appendChild(cell);
  }

  table.appendChild(row);
}

