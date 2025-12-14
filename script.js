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
// STEP 4: Build table header (Task | 1 | 2 | 3 ...)
const table = document.getElementById("tracker-table");

// create header row
const headerRow = document.createElement("tr");

// first cell = "Task"
const taskHeader = document.createElement("th");
taskHeader.innerText = "Task";
headerRow.appendChild(taskHeader);

// create day columns
for (let day = 1; day <= daysInMonth; day++) {
  const dayCell = document.createElement("th");
  dayCell.innerText = day;
  headerRow.appendChild(dayCell);
}

// add header row to table
table.appendChild(headerRow);
// STEP 5: Create task rows and checkboxes
for (let i = 0; i < tasks.length; i++) {

  // create a new row
  const row = document.createElement("tr");

  // first column: task name
  const taskCell = document.createElement("td");
  taskCell.innerText = tasks[i];
  row.appendChild(taskCell);

  // create checkboxes for each day
  for (let day = 1; day <= daysInMonth; day++) {

    const cell = document.createElement("td");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    cell.appendChild(checkbox);
    row.appendChild(cell);
  }

  // add the row to the table
  table.appendChild(row);
}
