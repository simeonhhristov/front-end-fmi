const input = document.getElementById("task-input");
const list = document.getElementById("list");

input.addEventListener("keydown", event => {
  const isEnter = event.key === "Enter";
  const value = input.value;

  if (!value) {
    return;
  }

  if (isEnter) {
    if (value[0] == "#") {
      
    }
    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox" />
            <span>${value}</span>
            <button class="delete-task">X</button>
    `
    list.appendChild(li);
    input.value = "";
  }
})

list.addEventListener("change", event => {
  const li = event.target.parentElement;
  li.classList.toggle("done", event.target.checked)
})

list.addEventListener("click", event => {
  const isDeleteClicked = event.target.classList.contains("delete-task");
  if (isDeleteClicked) {
    const li = event.target.parentElement;
    list.removeChild(li);
  }
})

const filterAll = document.getElementById("filter-all");
filterAll.addEventListener("click", event => {
  Array.from(list.querySelectorAll("li")).forEach( li => {
    li.classList.remove("hidden-list-item");
  })
})

const filterActive = document.getElementById("filter-active")
filterActive.addEventListener("click", event => {
  Array.from(list.querySelectorAll("li")).forEach ( li => {
    li.classList.toggle("hidden-list-item", li.classList.contains("done"));
  })
})

const filterComplete = document.getElementById("filter-completed") 
filterComplete.addEventListener("click", event => {
  Array.from(list.querySelectorAll("li")).forEach ( li => {
    li.classList.toggle("hidden-list-item", !li.classList.contains("done"));
  })
})