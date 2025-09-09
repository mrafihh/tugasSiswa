import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TodosController } from './todos/todos.controller';
import { TodoService } from './todos/todos.service';
import { siswaController } from './siswa/siswa.controller';
import { siswaService } from './siswa/siswa.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, TodosController, siswaController],
  providers: [AppService, UserService, TodoService, siswaService],
})
export class AppModule {}
