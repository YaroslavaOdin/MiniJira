export enum statusTask { 
    Backlog = "Backlog", 
    Sprint = "Sprint",
    Estimation = "Estimation",
    InProgress = "In Progress",
    Review = "Review",
    QA = "QA",
    DefinitionOfDone = "Definition of done"
  };

export interface Task {
    name: string;
    status: statusTask | string; 
    assignedPerson?: string;
    description: string;
    timeCreation: Date | string;
}