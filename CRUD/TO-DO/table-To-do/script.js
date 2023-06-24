const inputFirstName = document.querySelector(".form:nth-of-type(1) .input");
const inputLastName = document.querySelector(".form:nth-of-type(2) .input");
const btn = document.querySelector(".btn");
const tbody = document.querySelector("tbody");

btn.addEventListener("click", (e) => {
  addTask()
});

tbody.addEventListener('click', (e) => {
  deleteBtn(e)
})

inputFirstName.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask()
  }
})
inputLastName.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask()
  }
})

function addTask(e) {
  if (inputFirstName.value === '' || inputLastName.value === '') {
    alert('Заполните все поля!')
  }else{
    tbody.innerHTML += `
  <tr>
    <td>${inputFirstName.value}</td>
    <td>${inputLastName.value}</td>
    <td><button class='del-btn'>delete</button></td>
  </tr>`;

  inputFirstName.value = ''
  inputLastName.value = ''
  inputFirstName.focus()
  }
}

function deleteBtn(e) {
  if (e.target.classList.contains('del-btn')) {
    e.target.parentNode.parentNode.remove();
  }
}
// .closest('tr')
