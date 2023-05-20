import { generateId } from "../../shared/helpers/generateId";
import { Todo } from "./todo-list.interface";

export const todoListExampleData: Todo[] = [
    {
        id: generateId(),
        todoName: 'first todo',
        isCompleted: false
    },
    {
        id: generateId(),
        todoName: 'second todo',
        isCompleted: false
    },
    {
        id: generateId(),
        todoName: 'third todo',
        isCompleted: false
    },
    {
        id: generateId(),
        todoName: 'fourth todo',
        isCompleted: false
    }
]