class TaskManager {
  constructor(currentId=0){
    this.tasks = [];
    this.currentId = currentId;
  }
  let addTask(dueDate, assignedTo, description) {
    const task = {
      id: this.currentId++,
      dueDate: dueDate,
      assignedTo: assignedTo,
      description: description,
      status: 'TODO'
    }
    this.tasks.push(task);
  }
  let taskCard
}
