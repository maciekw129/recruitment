import { defineStore } from "pinia";
import { Todo } from "./todo-list.interface";

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todosList: [{
                text: "sadasdasd",
                isCompleted: true
            }] as Todo[]
        }
    },
    getters: {
        todosCompletedSize: (state) => state.todosList.filter(todo => todo.isCompleted).length
    },
    actions: {
        addTodo(todo: Todo) {
            this.todosList = [...this.todosList, todo]
        }
    }
    
})