import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";

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
    createTask(@Body() task: any){
        //buscar en una bd o hacer alguna otra peticion a otro end
        return this.tasksService.createTask(task);
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