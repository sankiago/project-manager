import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { User } from '../user/user.entity';
import { Project } from '../project/project.entity';

@Entity('user_project')
export class UserProject {
  @PrimaryGeneratedColumn('uuid')
  user_project_uuid: string;

  @ManyToOne(() => User, user => user.userProjects)
  user: User;

  @ManyToOne(() => Project, project => project.userProjects)
  project: Project;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
}
