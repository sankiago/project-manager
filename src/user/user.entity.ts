import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Enterprise } from '../enterprise/enterprise.entity';
import { UserProject } from '../user_project/user_project.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @ManyToOne(() => Enterprise, enterprise => enterprise.users)
  enterprise: Enterprise;

  @OneToMany(() => UserProject, userProject => userProject.user)
  userProjects: UserProject[];
}
