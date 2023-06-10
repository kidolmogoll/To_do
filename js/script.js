document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
    console.log('readyState: "Complete"');
  }
});

const addButton = document.querySelector(".add-btn");
const listInput = document.querySelector(".list-input input");
const toDoList = document.querySelector(".to_do-list");

const initApp = () => {
  // ADD TODO ITEM
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (listInput.value) {
        const li = document.createElement("li");
        localStorage.setItem("to_do", listInput.value);
        let inputValue = localStorage.getItem("to_do");
        li.innerHTML = `
            <input class="checkbox" type="checkbox" />
            <div class="list-display">${inputValue}</div>
            <img
              width="15px"
              class="delete-btn"
              src="img/trash-solid.svg"
              alt=""
            />`;
        toDoList.appendChild(li);
        listInput.value = "";

        // CHECK OUT ITEM
        const checkBox = li.querySelector(".checkbox");
        const listDisplay = li.querySelector(".list-display");
        checkBox.onclick = () => {
          listDisplay.classList.add("checked");
          checkBox.disabled = "true";
        };
        // DELETE ITEM
        const removeButton = li.querySelector(".delete-btn");
        removeButton.onclick = () => {
          inputValue = localStorage.removeItem("to_do");
          removeButton.parentElement.remove();
        };
      }
    }
  });
  addButton.addEventListener("click", () => {
    if (listInput.value) {
      const li = document.createElement("li");
      localStorage.setItem("to_do", listInput.value);
      let inputValue = localStorage.getItem("to_do");
      li.innerHTML = `
            <input class="checkbox" type="checkbox" />
            <div class="list-display">${inputValue}</div>
            <img
              width="15px"
              class="delete-btn"
              src="img/trash-solid.svg"
              alt=""
            />`;
      toDoList.appendChild(li);
      listInput.value = "";

      // CHECK OUT ITEM
      const checkBox = li.querySelector(".checkbox");
      const listDisplay = li.querySelector(".list-display");
      checkBox.onclick = () => {
        listDisplay.classList.add("checked");
        checkBox.disabled = "true";
      };
      // DELETE ITEM
      const removeButton = li.querySelector(".delete-btn");
      removeButton.onclick = () => {
        inputValue = localStorage.removeItem("to_do");
        removeButton.parentElement.remove();
      };
    }
  });
};
