import { Router } from 'express';

import { AllTasksController } from '../../use-cases/allTasks/AllTasksController';
import { CreateTaskController } from '../../use-cases/createTask/CreateTaskController';
import { DeleteTaskController } from '../../use-cases/deleteTask/DeleteTaskController';
import { GetTaskController } from '../../use-cases/getTask/GetTaskController';
import { UpdateTaskController } from '../../use-cases/updateTask/UpdateTaskController';
import { createTask } from '../middleware/tasks.validators';

const routes = Router();

routes.get('/tasks/:id', new GetTaskController().handle);

routes.get('/tasks', new AllTasksController().handle);

routes.post('/tasks/create', createTask, new CreateTaskController().handle);

routes.put('/tasks/:id/update', new UpdateTaskController().handle);

routes.delete('/tasks/:id/remove', new DeleteTaskController().handle);

export default routes;
