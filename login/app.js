const form = document.querySelector('.form')
const email = document.querySelector('.email')
const password = document.querySelector('.pass')
const btn = document.querySelector('.add')
const h4 = document.querySelector('h4')
const p = document.querySelector('#p')
const p2 = document.querySelector('#h5')

let count = 4
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email.value === 'Asad' && password.value === '123') {
    h4.innerHTML = 'Доступ открыт!!!'
    h4.style.color = 'green'
    p.innerHTML = ''
    p2.innerHTML = ''
    email.style.border = '2px solid green'
    password.style.border = '2px solid green'
  }else{
    email.value = ''
    password.value = ''

    count--
    if (email.value === '' && password.value === '') {
      // document.querySelector('.email').placeholder = 'Это поле обязательное';
      // document.querySelector('.pass').placeholder = 'поле не должен быть пустым!!!';
      p.innerHTML = 'Это поле обязательное'
      p2.innerHTML = 'максимальное кол-во 8'
      email.style.border = '2px solid #f44336'
      password.style.border = '2px solid #f44336'
    }
    if (count === 3) {
      h4.style.color = '#000'
      h4.innerHTML = 'неверный пороль'
    }
    if (count === 2) {
      h4.style.color = 'pink'
      h4.innerHTML = `у вас ${count} попытки`

    }
    if (count === 1) {
      h4.style.color = 'red'
      h4.innerHTML = `у вас ${count} попыткa`
    }
    if (count === 0) {
      h4.innerHTML = `Доступ закрыт`
      btn.setAttribute ('disabled', 'disabled')
    }
  }
})
