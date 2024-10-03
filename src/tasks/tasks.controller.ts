import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.getTasks();
    }

    @Get('/test')
    getTestTasks(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.testing();
    }

    @Post()
    createTask(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.createTask();
    }

    @Put()
    updateTask(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.deleteTask();
    }

    @Patch() //El patch se usa para actualizar solo parte del objeto
    deleteTaskStatus(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.patchTask();
    }

    @Get('/')
    index(){
        return 'Pagina inicial'
    }

}