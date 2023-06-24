const hero = document.querySelector(".hero");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const selelct = document.querySelector('select')
const selelct2 = document.querySelector('.header__select')


let all = null
function getApi(API) {
  axios(`https://restcountries.com/v3.1/${API}`).then((res) => {
    all = res.data
    console.log(res.data);
    view(res.data);
  });
}
getApi("all");

function view(data) {
  window.scroll(0, 0);
  hero.innerHTML = "";
  data.slice(0, 20).map((el) => {
    hero.innerHTML += `
        <div class='box'>
          <img src="${el.flags.svg}" alt="">
          <h2>Страна: ${el.name.common}</h2>
          <h4>Площодь: ${el.area} КВ <sup>2</sup></h4>
          <h4>Населения: ${el.population}</h4>
          <h4>Регион: ${el.region}</h4>
          <a href="${el.maps.googleMaps}" target='_blank' class='map'>maps</a>
        </div>`;
  });
}

btn.addEventListener('click', () => {
  getApi(`name/${input.value}`)
})

input.addEventListener('input', (e) => {
  getApi(`name/${e.target.value}`)
})


selelct.addEventListener('change', (e) => {
  let target = e.target.value
  if (target === 'asia') {
    const filter = all.filter((el) => {
      return el.region === "Asia"
    })
    view(filter)
  }
})
selelct.addEventListener('change', (e) => {
  let target = e.target.value
  if (target === 'africa') {
    const filter = all.filter((el) => {
      return el.region === "Africa"
    })
    view(filter)
  }
})
selelct.addEventListener('change', (e) => {
  let target = e.target.value
  if (target === 'americas') {
    const filter = all.filter((el) => {
      return el.region === "Americas"
    })
    view(filter)
  }
})
selelct.addEventListener('change', (e) => {
  let target = e.target.value
  if (target === 'europe') {
    const filter = all.filter((el) => {
      return el.region === "Europe"
    })
    view(filter)
  }
})

selelct2.addEventListener("change", (e) => {
  let target = e.target.value;
  if (target === "area") {
    let res = all.sort((a, b) => {
      return b.area - a.area;
    });
    view(res);
  }
  if (e.target.value === "population") {
    let res = all.sort((a, b) => {
      return b.population - a.population;
    });
    view(res);
  }
  if (e.target.value === "A-Z") {
    let res = all.sort((a, b) => {
      return b.name.common > a.name.common ? 1 : -1;
    });
    view(res);
  }
  if (e.target.value === "Z-A") {
    let res = all.sort((a, b) => {
      return b.name.common > a.name.common ? 1 : -1;
    });
    view(res);
  }
});
