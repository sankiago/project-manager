import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Enterprise } from '../enterprise/enterprise.entity';
import { UserProject } from '../user_project/user_project.entity';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  project_uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @ManyToOne(() => Enterprise, enterprise => enterprise.projects)
  enterprise: Enterprise;

  @OneToMany(() => UserProject, userProject => userProject.project)
  userProjects: UserProject[];
}
