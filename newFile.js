class TaskManager {
  constructor(dueDate, assignedTo, description) {
    this._dueDate = dueDate;
    this._assignedTo = assignedTo;
    this._description = description;
  }

  get dueDate() {
    return this._dueDate;
  }

  get assignedTo() {
    return this._assignedTo;
  }

  get description() {
    return this.assignedTo;
  }

  
}