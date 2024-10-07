import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class HelloController {
    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url);
        
        response.status(200).json({
            message: 'Hello world!'
        });
    }

    @Get('notFound')
    @HttpCode(404)
    notFoundPage() {
        return 'Pagina no encontrada';
    }
}
