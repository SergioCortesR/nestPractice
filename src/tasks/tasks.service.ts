import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksService {
    
    getTasks() {
        return ['Task1', 'Task2', 'Task3']
    }

    createTask(){
        return 'Task creado con exito'
    }

    updateTask(){
        return 'Task actualizado con exito'
    }

    deleteTask(){
        return 'Task eliminado con exito'
    }

    patchTask(){
        return 'Task parcialmente actualizado con exito'
    }

    testing = () => 'retorno de test en arrow function' //Mejor no usar las arrow function en nest debido a la base en que esta montado el framework
}