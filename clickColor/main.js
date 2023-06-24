const board = document.querySelector("#board");
const randomName = [
  "Asad",
  "jenish",
  "Aizat",
  "Nazi",
  "Bekbolsun",
  "Ulan",
  "Dasha",
  "Aisalkun",
];

// RandomName
for (let i = 0; i < 2; i++) {
  const box1 = document.createElement("div");
  board.append(box1);
  box1.setAttribute("class", "box1");
  box1.addEventListener("click", () => {
    setColor(box1);
  });
}

function setColor(a) {
  let color = random1();
  a.style.backgroundColor = color;
  a.innerText = random1();
  a.style.color = "red";
  a.style.display = "flex";
  a.style.alignItems = "center";
  a.style.justifyContent = "center";
  a.style.transform = "scale(1.5)";
}

function random1() {
  const ind = Math.floor
  (Math.random() * randomName.length);
  return randomName[ind];
}
//=========================







//Color
const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
]
const items = document.querySelector("#items");
let totalCounter = 0;

for (let i = 0; i < 200; i++) {
  const box = document.createElement("div");
  const counterSpan = document.createElement("span");
  counterSpan.textContent = "0";
  box.append(counterSpan);
  items.append(box);
  box.setAttribute("class", "box");

  box.addEventListener("click", function () {
    const siblings = Array.from(this.parentNode.children);
    const index = siblings.indexOf(this);

    if (index < siblings.length - 1) {
      siblings[index + 1].style.backgroundColor = randomColor();
    }

    // if (index < siblings.length - 1) {
    //   siblings[index - 1].style.backgroundColor = randomColor();
    // }

    totalCounter++;
    const totalCounterElement = document.querySelector("#total-counter");
    totalCounterElement.textContent = `вы кликали: ${totalCounter} раз`;

    counterSpan.textContent = parseInt(counterSpan.textContent) + 1;
  });
}



function randomColor() {
  const colorIndex = Math.floor(Math.random() * colorNames.length);
  return colorNames[colorIndex];
}


const totalCounterElement = document.createElement("h1");
totalCounterElement.setAttribute("id", "total-counter");
totalCounterElement.textContent = "посчитаю";
document.body.append(totalCounterElement);
//==========================
