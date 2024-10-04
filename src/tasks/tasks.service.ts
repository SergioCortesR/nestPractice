import { Injectable, NotFoundException } from "@nestjs/common";

export interface User {
    name: string,
    age: number
}

@Injectable()
export class TasksService {

    private tasks = [];

    getTasks(): Array<any> {
        return this.tasks;
    }

    showTask(id: number) {
        const taskFound = this.tasks.find(t => t.id === id);

        if (!taskFound) {
            return new NotFoundException("Task with id " + id + " not found");
        }

        return taskFound;
    }

    createTask(task: any) {
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    updateTask() {
        return 'Task actualizado con exito'
    }

    deleteTask() {
        return 'Task eliminado con exito'
    }

    patchTask() {
        return 'Task parcialmente actualizado con exito'
    }

    testing = () => 'retorno de test en arrow function' //Mejor no usar las arrow function en nest debido a la base en que esta montado el framework
}