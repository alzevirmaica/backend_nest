import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];
  findAll() {
    return [{ id: 1, task: 'comprar pão' }];
  }

  findOne(id: string) {
    return 'buscar tarefa com ID ' + id;
  }

  create(body: any) {
    console.log('Tarefa criada com sucesso ');
    return body;
  }
}
