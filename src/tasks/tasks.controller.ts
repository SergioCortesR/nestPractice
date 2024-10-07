import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TasksController {

    tasksService: TasksService;

    constructor(tasksService: TasksService) {
        this.tasksService = tasksService;
    }

    @Get()
    getAllTasks(@Query() query:any){
        console.log(query);
        
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.getTasks();
    }

    @Get('/test')
    getTestTasks(){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.testing();
    }

    @Get('/:id')
    showTask(@Param('id') id: string){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.showTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: createTaskDto){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: updateTaskDto){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.updateTask(task);
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