import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enterprise } from './enterprise/enterprise.entity';
import { User } from './user/user.entity';
import { Project } from './project/project.entity';
import { UserProject } from './user_project/user_project.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Cambia esto si usas otro motor de base de datos
      host: 'localhost',
      port: 5432,
      username: 'your-username',
      password: 'your-password',
      database: 'your-database',
      entities: [Enterprise, User, Project, UserProject],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Enterprise, User, Project, UserProject]),
  ],
})
export class AppModule {}
