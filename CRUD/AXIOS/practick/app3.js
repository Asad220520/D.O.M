const dogs = document.querySelector(".dogs");
const breadsImg = document.querySelector(".breadsImg");
const select3 = document.querySelector("#select3");
const input = document.querySelector("input");
const delBtn = document.querySelector('.button')

function getImg(API) {
  axios(`https://dog.ceo/api/breed/${API}/images/random`).then((res) => {
    breadsImg.innerHTML = `
    <img src="${res.data.message}" height="400" width="400" style="object-fit: cover;" alt="">
    `;
  });
}
getImg(select3.value);


// select option----------------------
function option() {
  axios(`https://dog.ceo/api/breeds/list/all`).then((res) => {
    Object.keys(res.data.message).map((el) => {
      select3.innerHTML += `
      <option>${el}</option>
    `;

    });
  });
}
option();

select3.addEventListener("change", (e) => {
  getImg(e.target.value);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getImg(e.target.value);
  }
});

input.addEventListener("input", (e) => {
  getImg(e.target.value);
});
delBtn.addEventListener('click',()=>{

})
