function addTitle(element, content) {
  const newElement = document.createElement(element);
  newElement.innerText = content;
  newElement.classList = "title";
  window.document.querySelector(".container").appendChild(newElement);
}

addTitle("h1", "This is a title");
