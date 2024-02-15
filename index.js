let dataStorage = [];
let id = "3";

let checkBoxTaskHandler = (e) => {
  console.log(e.target.id);
  let checkedElement = e.target.id;
  let checkboxNumber = checkedElement.split("checkBox");
  console.log(checkboxNumber, e);
  if (e.target.checked === true) {
    if (checkboxNumber[1] === "1") {
      let successMessage = document.createElement("div");
      successMessage.setAttribute("id", "completionMessage1");
      successMessage.innerText = "C";
      let taskCont = document.getElementById("taskCont1");
      if (!document.getElementById("completionMessage")) {
        taskCont.appendChild(successMessage);
        console.log("Success");
      }
    }
  } else {
    if (checkboxNumber[1] === "1") {
      if (document.getElementById("completionMessage1")) {
        let successMessage = document.getElementById("completionMessage1");
        successMessage.parentNode.removeChild(successMessage);
        console.log("removed");
      }
    }
  }

  if (e.target.checked === true) {
    if (checkboxNumber[1] === "2") {
      let successMessage = document.createElement("div");
      successMessage.setAttribute("id", "completionMessage2");
      successMessage.innerText = "C";
      let taskCont = document.getElementById("taskCont2");
      if (!document.getElementById("completionMessage")) {
        taskCont.appendChild(successMessage);
        console.log("Success");
      }
    }
  } else {
    if (checkboxNumber[1] === "2") {
      if (document.getElementById("completionMessage2")) {
        let successMessage = document.getElementById("completionMessage2");
        successMessage.parentNode.removeChild(successMessage);
        console.log("removed");
      }
    }
  }

  if (e.target.checked === true) {
    if (checkboxNumber[1] === "3") {
      let successMessage = document.createElement("div");
      successMessage.setAttribute("id", "completionMessage3");
      successMessage.innerText = "C";
      let taskCont = document.getElementById("taskCont3");
      if (!document.getElementById("completionMessage")) {
        taskCont.appendChild(successMessage);
        console.log("Success");
      }
    }
  } else {
    if (checkboxNumber[1] === "3") {
      if (document.getElementById("completionMessage3")) {
        let successMessage = document.getElementById("completionMessage3");
        successMessage.parentNode.removeChild(successMessage);
        console.log("removed");
      }
    }
  }
};

let deleteBttnHandler = (e) => {
  console.log(e.target.id);
  let buttonClicked = e.target.id;
  let buttonID = buttonClicked.split("button");
  console.log(buttonID);
  if (buttonID[1] === "1") {
    let outerBox = document.getElementById("outerBox1");
    outerBox.parentNode.removeChild(outerBox);
    console.log("Deleted");
  }
  if (buttonID[1] === "2") {
    let outerBox = document.getElementById("outerBox2");
    outerBox.parentNode.removeChild(outerBox);
    console.log("Deleted");
  }
  if (buttonID[1] === "3") {
    let outerBox = document.getElementById("outerBox3");
    outerBox.parentNode.removeChild(outerBox);
    console.log("Deleted");
  }
};

let deleteNewTaskCont = () => {
  let newTaskOuterBox = document.getElementById("newTaskOuterBox");
  newTaskOuterBox.parentNode.removeChild(newTaskOuterBox);
  console.log("Deleted");
};

let checkboxEvntAttach = (() => {
  let checkBox1 = document.getElementById("checkBox1");
  let checkBox2 = document.getElementById("checkBox2");
  let checkBox3 = document.getElementById("checkBox3");
  checkBox1.addEventListener("click", checkBoxTaskHandler);
  checkBox2.addEventListener("click", checkBoxTaskHandler);
  checkBox3.addEventListener("click", checkBoxTaskHandler);

  let deleteButton1 = document.getElementById("button1");
  let deleteButton2 = document.getElementById("button2");
  let deleteButton3 = document.getElementById("button3");
  deleteButton1.addEventListener("click", deleteBttnHandler);
  deleteButton2.addEventListener("click", deleteBttnHandler);
  deleteButton3.addEventListener("click", deleteBttnHandler);
})();

let deleteAddedTasks = (e) => {
  let idCont = e.target.id.split("button");
  let id = "outerBox" + idCont[1];
  console.log(typeof idCont[1], typeof dataStorage[0].id);
  for (let i = 0; i < dataStorage.length; i++) {
    let dataStorageObj = dataStorage[i];
    if (idCont[1] === dataStorageObj.id.toString()) {
      dataStorage.splice(i, 1);
      console.log("ObjRemoved", dataStorage);
    }
  }
  let outerBox = document.getElementById(id);
  outerBox.parentNode.removeChild(outerBox);
};

let checkBoxHndlrNewTasks = (e) => {
  let checkedElement = e.target.id;
  let checkboxNumber = checkedElement.split("checkBox");
  let successMessageId = "completionMessage" + checkboxNumber[1];
  let successMessage = document.getElementById(successMessageId);
  console.log(checkboxNumber, e.target.id);
  if (e.target.checked === true) {
    let id = "taskCont" + checkboxNumber[1];
    let taskCont = document.getElementById(id);

    successMessage.innerText = "C";
    if (!document.getElementById(successMessageId)) {
      taskCont.appendChild(successMessage);
      console.log("Success");
    }
  } else {
    if (e.target.checked === false) {
      if (document.getElementById(successMessageId)) {
        successMessage.innerText = null;
      }
    }
  }
};

let addNewTaskTables = (taskObjCont) => {
  dataStorage.push(taskObjCont);

  deleteNewTaskCont();

  let outerBoxId = "outerBox" + taskObjCont.id;
  console.log(outerBoxId);

  let newCont = document.createElement("div");
  newCont.setAttribute("id", outerBoxId);
  newCont.classList.add("taskOuterBox");

  let taskContId = "taskCont" + taskObjCont.id;
  let taskCont = document.createElement("div");
  taskCont.classList.add("tasksCont");
  taskCont.setAttribute("id", taskContId);

  let checkBoxId = "checkBox" + taskObjCont.id;
  let checkBox = document.createElement("input");
  checkBox.setAttribute("id", checkBoxId);
  checkBox.classList.add("checkBox");
  checkBox.setAttribute("type", "checkbox");
  checkBox.addEventListener("click", checkBoxHndlrNewTasks);

  let taskName = document.createElement("div");
  taskName.classList.add("taskName");
  taskName.innerText = taskObjCont.taskname;

  let successMessage = document.createElement("div");
  let successMessageId = "completionMessage" + taskObjCont.id;
  successMessage.setAttribute("id", successMessageId);

  taskCont.appendChild(checkBox);
  taskCont.appendChild(taskName);
  taskCont.appendChild(successMessage);
  newCont.appendChild(taskCont);

  document.getElementById("outerCont").appendChild(newCont);
  let deleteButtonId = "button" + taskObjCont.id;
  let buttonCont = document.createElement("div");
  buttonCont.classList.add("buttonCont");
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", deleteButtonId);
  deleteButton.addEventListener("click", deleteAddedTasks);
  deleteButton.innerText = "Remove";
  newCont.appendChild(deleteButton);
};

let addNewTaskList = () => {
  let taskObjCont = {};
  let taskName = document.getElementById("addNewTask").value;
  taskObjCont.taskname = taskName;
  id = +id + 1;
  taskObjCont.id = id;
  addNewTaskTables(taskObjCont);
};

let newTaskAddition = () => {
  let id = 3;
  let newCont = document.createElement("div");
  newCont.setAttribute("id", "newTaskOuterBox");
  newCont.classList.add("taskOuterBox");
  let newTaskCont = document.createElement("div");
  newTaskCont.classList.add("tasksCont");
  let inputTaskName = document.createElement("input");
  inputTaskName.setAttribute("id", "addNewTask");
  inputTaskName.classList.add("newTaskInputField");
  inputTaskName.setAttribute("type", "text");
  inputTaskName.placeholder = "Please enter the Task name";
  inputTaskName.addEventListener("change", addNewTaskList);

  let buttonCont = document.createElement("div");
  buttonCont.classList.add("buttonCont");
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteButton");
  deleteButton.addEventListener("click", deleteNewTaskCont);
  deleteButton.innerText = "Remove";

  if (!document.getElementById("addNewTask")) {
    buttonCont.appendChild(deleteButton);
    newTaskCont.appendChild(inputTaskName);
    newCont.appendChild(newTaskCont);
    newCont.appendChild(buttonCont);
    document.getElementById("outerCont").appendChild(newCont);
  }
  console.log("Added");
};
