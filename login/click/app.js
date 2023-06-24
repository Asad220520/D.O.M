const box = document.querySelectorAll('.box')
const color = [
  'red',
  'black'
]
box.forEach((el, ix) => {
  el.addEventListener('click', () => {
    box.forEach((w, ldx) => {
      w.style.background = 'none'
    })
    box[ix + 1].style.background = random()
  })
})


function random() {
const i = Math.floor(Math.random() * color.length)
return color[i]
}
