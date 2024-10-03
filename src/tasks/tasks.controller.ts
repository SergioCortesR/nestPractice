import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TasksController {

    @Get('/tasks')
    getAllTasks(){
        //buscar en una bd o hacer alguna otra peticion a otro endpoint
        return 'Obteniendo todas las tareas'
    }

    @Get('/')
    index(){
        return 'Pagina inicial'
    }

}