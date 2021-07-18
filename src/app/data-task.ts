import { Task } from "./task";
import { statusTask } from './statusTask';

export const TASKS: Task[] = [
    { 
      name: "Grid: Some icons are incorrect in context menu", 
      status: statusTask.Estimation, 
      assignedPerson: "Yaraslava Adzinets", 
      description: ["Icons should be the same as on toolbar"],
      timeCreation: { hous: 8, minuts: 14 }
    },
    {
      name: "Send Logs: An empty value remains in the ‘To’ field", 
      status: statusTask.Review, 
      assignedPerson: "Aliaksandr Hrushkevich", 
      description: ["1. Open the “Sens Logs” popup", "2. Remove address using ‘Backspace’", "An empty value remains in the ‘To’ field"],
      timeCreation: { hous: 9, minuts: 38 }
    },
    {
      name: "Send Logs: The input line goes beyond the “To” field", 
      status: statusTask.Backlog,  
      description: ["1.Open the “Sens Logs” popup", "2. Type 'longlonglonglonglonglonglo'", "Address bar is outside input"],
      timeCreation: { hous: 15, minuts: 20 }
    }
];