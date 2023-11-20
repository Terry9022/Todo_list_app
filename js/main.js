import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readystate === "complete") {
    initApp();
  }
});

const initApp = () => {
  // add listeners

  // Procedural
  // load list object
  refreshThePage();
};

const refreshThePage = () => {
  clearListDisplay();
  // renderList()
  // clearItemEntryField()
  // setFocusItemEntry()
};

const clearListDisplay = () => {
  const parentElement = document.getElementById("listItems");
  deleteContents(parentElement);
};
