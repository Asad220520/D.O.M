const block = document.querySelector('#block')
const button = document.querySelector('button')



button.addEventListener('click', () => {
  if (block.classList.toggle('block')) {
    button.textContent = 'close'
    block.style.transition = '2'
  }else{
    button.textContent = 'open'
    block.style.transition = '1'
  }
})
