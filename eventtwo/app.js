const btn = document.querySelector(".btn");
const div = document.querySelector(".div");
const btnn = document.querySelector(".btnn");


div.style.display = "none";
btnn.addEventListener('click', () => {
  div.style.transform = 'scaleY(0)'
  div.style.transition = "2s";
  div.style.background = 'black'
})

btn.addEventListener('click', () => {
  div.style.width = "200px";
  div.style.height = "200px";
  div.style.background = "red";
  div.style.margin = '40px 0 0 0'
  div.style.transform = "scale(1)";
  div.style.display = 'flex'
  div.style.justifyContent = 'center'
  div.style.alignItems = 'center'
})


btn.style.padding = '5px 20px'
btn.style.background = 'blue'
btn.style.border = 'none'
btn.style.borderRadius = '5px'
btn.style.color = '#fff'
