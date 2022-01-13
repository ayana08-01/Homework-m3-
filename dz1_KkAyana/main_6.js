const todo = document.getElementById("todo_list");
let task;
while (task = prompt("Введите пункт списка:"))
    todo.insertAdjacentHTML("beforeend", `<li>${task}</li>`);
