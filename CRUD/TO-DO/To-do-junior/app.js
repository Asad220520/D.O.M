const input = document.querySelector('.input')
const btn = document.querySelector('.add')
const h4 = document.querySelector('.err')
const ul = document.querySelector('.list')
const err = document.querySelector('.err')


function addTask () {
  if (input.value.trim() === '') {
    // err.innerHTML = '404'
    // err.style.color = 'red'
    alert('заполните полью')
  }else{
    err.innerHTML = ''
    ul.innerHTML += ` <li class="list-group-item w-50 d-flex align-items-center justify-content-between">
  <span>
  <input type="checkbox" class="check">
    ${input.value}
  </span>
  <button class="del-btn btn btn-danger">DELETE</button>
</li>`
input.value = ''
  }
}

btn.addEventListener('click', addTask)

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask()
  }
} )



ul.addEventListener('click',(e) => {
  if (e.target.classList.contains('del-btn')) {
    e.target.parentNode.remove()
  }
  if (e.target.classList.contains('check')) {
    if (e.target.parentNode.classList.contains('line')) {
      e.target.parentNode.classList.remove('line')
    }else{
      e.target.parentNode.classList.add('line')
    }
  }
})
