const inputTask = document.getElementById("taskInput");
const taskAdd = document.getElementById("addBtn");
const ulList = document.getElementById("listUL");
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    ulList.innerHTML = '';
    tasks.forEach((task, index) => {
        const list = document.createElement("li");
        list.innerHTML = `${task} <span class="material-symbols-outlined ram">delete</span>`;
        list.classList.add("listItem");
        ulList.appendChild(list);

        const deleteBtn = list.querySelector("span");
        deleteBtn.addEventListener("click", () => {
            list.remove();
            tasks.splice(index, 1);
            updateLocalStorage();
        });

        list.addEventListener("click", () => list.setAttribute("id", "clear"));
    });
}

renderTasks();

taskAdd.addEventListener("click", () => {
    const newTask = inputTask.value.trim();
    if (newTask && !tasks.includes(newTask)) {
        tasks.push(newTask);
        updateLocalStorage();
        renderTasks();
        inputTask.value = '';
    }
});

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
