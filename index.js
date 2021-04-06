var todoList = document.querySelector(".todo-list")
var inputField = document.querySelector(".input-field")
var addTodoButton = document.querySelector(".add-todo")
var todoContainer = document.querySelector(".todos")

addTodoButton.addEventListener("click", function() {
    var newElement = document.createElement("p")

    var newCompletedButton = document.createElement("button")
    var newEditButton = document.createElement("button")
    var newDeleteButton = document.createElement("button")

    newCompletedButton.innerHTML = "✓"
    newEditButton.innerHTML = "✎"
    newDeleteButton.innerHTML = "✘"

    newCompletedButton.classList.add("btn", "btn-success", "fas", "fa-check")
    newEditButton.classList.add("btn", "btn-info")
    newDeleteButton.classList.add("btn", "btn-danger")

    newElement.innerText = inputField.value;
    todoContainer.appendChild(newElement)

    todoContainer.appendChild(newCompletedButton)
    todoContainer.appendChild(newEditButton)
    todoContainer.appendChild(newDeleteButton)

    inputField.value = "";

    newCompletedButton.addEventListener("click", function(event) {
      newElement.classList.add("finished")
    })

    newDeleteButton.addEventListener("click", function(event) {
      newElement.remove()
      newCompletedButton.remove()
      newEditButton.remove()
      newDeleteButton.remove()
    })

    newEditButton.addEventListener("click", function(event) {
      var newEditField = document.createElement("input")
      var editedButton = document.createElement("button")
      editedButton.innerHTML = "✓"
      editedButton.classList.add("btn", "btn-outline-info")
      todoContainer.appendChild(newEditField)
      todoContainer.appendChild(editedButton)

      editedButton.addEventListener("click", function(event) {
        newElement.innerText = newEditField.value;
        newEditField.remove()
        editedButton.remove()
      })
    })

})
