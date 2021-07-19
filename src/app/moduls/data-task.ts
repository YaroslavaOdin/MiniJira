import { Task, statusTask } from "./task";

export const TASKS: Task[] = [
    { 
      name: "Grid: Some icons are incorrect in context menu", 
      status: statusTask.Estimation, 
      assignedPerson: "Yaraslava", 
      description: "Icons should be the same as on toolbar",
      timeCreation: new Date()
    },
    {
      name: "Send Logs: An empty value remains in the ‘To’ field", 
      status: statusTask.Review, 
      assignedPerson: "Sasha", 
      description: "1. Open the “Sens Logs” popup 2. Remove address using ‘Backspace' An empty value remains in the ‘To’ field",
      timeCreation: new Date()
    },
    {
      name: "Send Logs: The input line goes beyond the “To” field", 
      status: statusTask.Backlog,  
      description: "1.Open the “Sens Logs” popup 2. Type 'longlonglonglonglonglonglo' Address bar is outside input",
      timeCreation: new Date()
    }
];