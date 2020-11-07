# A intro to JavaScript in a Functional way

###### Main >

| Principles: | .   |
| ----------- | --- |
| Pure        | 1   |
| Declarative | 2   |
| Immutable   | 3   |

```
function addTitle(element, content) {
  const newElement = document.createElement(element);
  newElement.innerText = content;
  newElement.classList = "title";
  window.document.querySelector(".container").appendChild(newElement);
}

addTitle("h1", "This is a h1");
addTitle("h2", "This is a h2");
addTitle("h3", "This is a h3");
addTitle("h4", "This is a h4");
addTitle("h5", "This is a h5");
```

---

**"** _functional programming_ refers to the declarative evaluation of pure functions to create
immutable programs by avoiding externally observable side effects. **"**

---
