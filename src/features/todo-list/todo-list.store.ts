import { defineStore } from "pinia";
import { todoListExampleData } from "./todo-list.example-data";
import { Todo } from "./todo-list.interface";
import { generateId } from "../../shared/helpers/generateId";

export const useTodosStore = defineStore('todos', {
    state: () => {
        const todoList = new Map<string, Todo>();

        todoListExampleData.forEach(todo => {
            todoList.set(todo.id, todo);
        })

        return {todoList}
    },
    getters: {
        todosCompletedSize: (state) => [...state.todoList].filter(todo => todo[1].isCompleted).length
    },
    actions: {
        addTodo(todoName: string) {
            const id = generateId();
            this.todoList.set(id, {id, todoName, isCompleted: false});
        },
        toggleIsCompleted(todoId: string) {
            this.todoList.get(todoId)!.isCompleted = !this.todoList.get(todoId)!.isCompleted;
        }
    }
    
})