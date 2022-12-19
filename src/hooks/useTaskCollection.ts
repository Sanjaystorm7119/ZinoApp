import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    Todo: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 1',
        color: '',
      },
    ],
    'In Progress': [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 2',
        color: '',
      },
    ],
    Blocked: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: 'Task 3',
        color: '',
      },
    ],
    Completed: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: '',
      },
    ],
  });
}

export default useTaskCollection;
