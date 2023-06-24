const input = document.querySelector(".text-input");
const btn = document.querySelector(".add-btn");
const ul = document.querySelector(".list");

function view() {
  ul.innerHTML = "";
  const task = JSON.parse(localStorage.getItem("task")) || [];

  task.map((el) => {
    ul.innerHTML += `<li class='list-group-item d-flex align-items-center justify-content-between'>
    <span class='${el.isDone ? "line" : ""}'>
      <input type='checkbox' ${el.isDone ? "checked" : ""} class='check'>
      ${el.title}
    </span>
    <button class='del-btn btn btn-danger'>delete</button>
    </li>`;
  });
  delBtn();
  checkBox();
}
view();

function addTask() {
  if (input.value.trim() === "") {
    alert("404");
  } else {
    const task = JSON.parse(localStorage.getItem("task")) || [];
    const newTask = {
      id: task.length ? task[task.length - 1].id + 1 : 1,
      title: input.value,
      isDone: false,
    };
    const result = [...task, newTask];
    localStorage.setItem("task", JSON.stringify(result));
    input.value = "";
    view();
    input.focus()
  }
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask()
  }
})

btn.addEventListener("click", addTask);

function delBtn() {
  let task = JSON.parse(localStorage.getItem("task")) || [];
  const buttons = document.querySelectorAll(".del-btn");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      task = task.filter((el, idx) => {
        return idx !== index;
      });
      localStorage.setItem("task", JSON.stringify(task));
      view();
    });
  });
}
delBtn();

function checkBox() {
  let task = JSON.parse(localStorage.getItem("task")) || [];
  const checkBoxes = document.querySelectorAll(".check");
  checkBoxes.forEach((check, index) => {
    check.addEventListener("click", () => {
      task = task.map((el, idx) => {
        if (idx === index) {
          return { ...el, isDone: !el.isDone };
        } else {
          return el;
        }
      });
      localStorage.setItem("task", JSON.stringify(task));
      view();
    });
  });
}
