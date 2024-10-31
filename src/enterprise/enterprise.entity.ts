import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Project } from '../project/project.entity';
import { User } from '../user/user.entity';

@Entity('enterprise')
export class Enterprise {
  @PrimaryGeneratedColumn('uuid')
  enterprise_uuid: string;

  @Column({ length: 100 })
  name: string;

  @Column()
  nit: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @OneToMany(() => Project, project => project.enterprise)
  projects: Project[];

  @OneToMany(() => User, user => user.enterprise)
  users: User[];
}
