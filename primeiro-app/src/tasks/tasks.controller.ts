import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  getTasks() {
    return 'Aqui lista todas tarefas';
  }

  @Get('/teste')
  getstest() {
    return 'teste tarefas';
  }
}
