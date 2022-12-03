interface ICreateTaskDTO {
  title: string;
  description: string;
  priority: number;
  status: 'pending' | 'in-progress' | 'done';
  members?: string[];
  tags: string[];
  startedAt: Date;
  finishedAt: Date;
}

interface IUpdateTaskDTO {
  _id: string;
  title?: string;
  description?: string;
  priority?: number;
  status?: 'pending' | 'in-progress' | 'done';
  members?: string[];
  tags?: string[];
  startedAt?: Date;
  finishedAt?: Date;
}

interface IGetTaskByIdDTO {
  _id: string;
}

export { ICreateTaskDTO, IUpdateTaskDTO, IGetTaskByIdDTO };
