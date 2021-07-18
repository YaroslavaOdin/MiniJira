import { TimeСreation } from './date'
import { statusTask } from './statusTask';

export interface Task {
    name: string;
    status: statusTask; 
    assignedPerson?: string;
    description: string[];
    timeCreation: TimeСreation;
}