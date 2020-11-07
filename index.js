function addTitle(element, content, size,color) {
  const newElement = document.createElement(element);
  newElement.innerText = content;
  newElement.classList = "title";
  newElement.style.width = size + 'px';
  newElement.style.background = color;
  window.document.querySelector(".container").appendChild(newElement);
}

function randomColor(){
  const r = Math.floor(Math.random()*255);
  const g = Math.floor(Math.random()*255);
  const b = Math.floor(Math.random()*255);
  return `rgb(${r},${g},${b})`
}

addTitle("h1", "This is a text",350,randomColor());
addTitle("h2", "This is a text",200,randomColor());
addTitle("h3", "This is a text",150,randomColor());
addTitle("h4", "This is a text",100,randomColor());
addTitle("h5", "This is a text",80,randomColor());
addTitle("h5", "This is a text",40,randomColor());
