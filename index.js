let taskIDCounter = 0;
const taskList = [];
let i = 0;
const todoListElement = document.querySelector("#todo-list");
const createTaskForm = document.querySelector("#createtoDo");
const createTaskInput = createTaskForm.querySelector("input");
const createTaskButton = createTaskForm.querySelector("button");

const TASK_STATUS = Object.freeze({
  todo: "todo",
  done: "done",
});

function taskFactory(text = "", status = TASK_STATUS.todo) {
  if (typeof text !== "string") {
    return;
  }

  if (status !== TASK_STATUS.todo && status !== TASK_STATUS.done) {
    return;
  }

  const taskObject = {
    id: `tasks-uuid-${taskIDCounter}`,
    text,
    status, // status: status
  };

  taskIDCounter++;

  return taskObject;
}

function renderTask() {
  const liValue = `<li class="rounded-x1 bg-gray-100 p-2 mt-1 flex justify-between">${taskList[i].text}

<div>
    <span class="fa fa-minus-circle text-red-500"></span>

    </span>
    <span class="fa fa-check-circle text-green-500"></span>

</div>

</li>`;
  todoListElement.innerHTML += liValue;
  i += 1;
}

function createTask(text = "") {
  //یک تسک آبجکت ایجاد میکند
  const task = taskFactory(text);
  //تسک آبجکت با نام تسک را به آرایه تسکها اضافه میکند
  taskList.push(task);

  //
  renderTask();
}



function createTaskHandler() {
  const value = createTaskInput.value;
  if (!value) {
    return;
  }
  createTask(value);
  // باکس متن هردفعه پس از فشردن دکمه خالی شود
  createTaskInput.value = "";
}

createTaskButton.addEventListener("click", createTaskHandler);


createTaskForm.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    createTaskHandler();
    event.preventDefault();
    // Trigger the button element with a click
    
                               }
});
