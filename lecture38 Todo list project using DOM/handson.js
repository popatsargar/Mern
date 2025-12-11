// handson_todo_validation.js
// Simple Todo List with Beginner-Friendly Validation

const addBtn = document.querySelector(".add-btn");
const todoInput = document.querySelector("#todo");
const todoItemsSection = document.querySelector("#todo-items");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // -----------------------------
  // VALIDATION: Stop empty todos
  // -----------------------------
  const value = todoInput.value.trim();
  if (value === "") {
    alert("Todo cannot be empty!");
    todoInput.focus();
    return;
  }

  // Create Todo Item
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.innerHTML = `
    <p>${value}</p>
    <div class="todo-buttons">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  todoItemsSection.appendChild(todoItem);

  // Delete Functionality
  todoItem.querySelector(".delete-btn").addEventListener("click", () => {
    todoItem.remove();
  });

  // Edit Functionality
  const editBtn = todoItem.querySelector(".edit-btn");
  editBtn.addEventListener("click", () => {
    const pElement = todoItem.querySelector("p");

    if (editBtn.textContent === "Save") {
      const newInput = todoItem.querySelector("input");
      const newValue = newInput.value.trim();

      // Validation: Prevent saving empty todo
      if (newValue === "") {
        alert("Todo cannot be empty!");
        return;
      }

      pElement.textContent = newValue;
      newInput.remove();

      pElement.style.display = "block";
      editBtn.textContent = "Edit";
    } else {
      const newInput = document.createElement("input");
      newInput.value = pElement.textContent;

      pElement.style.display = "none";
      todoItem.insertBefore(newInput, todoItem.querySelector(".todo-buttons"));

      editBtn.textContent = "Save";
    }
  });

  todoInput.value = ""; // clear input after adding
});
