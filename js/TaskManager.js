class TaskManager {
  constructor(currentId=0)
  {
    console.log(currentId);
    this.tasks = [];
    this.currentId = currentId;
  }
  addTask(dueDate, assignedTo, description) {
    // const date = document.querySelector("#due-date").value
    // console.log(date);
    // const task = {
    //   id: this.currentId++,
    //   dueDate,
    //   assignedTo,
    //   description,
    //   status: 'TODO'
    // }
    // this.tasks.push(task);
    // return this.tasks;
    const date = document.querySelector("#due-date").value
    console.log(date)
  }
  taskCard()
  {
    
  }
}

const manager = new TaskManager(10)

document.querySelector(".button").addEventListener("click", () =>
  {
  manager.addTask()
    // const date = document.querySelector("#due-date").value
    // console.log(date)
  })