import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  findAll() {
    return [{ id: 1, task: 'comprar pão' }];
  }

  findOne(id: string) {
    return 'buscar tarefa com ID ' + id;
  }
}
