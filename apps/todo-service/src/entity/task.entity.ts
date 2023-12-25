import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User.entity';
import { Project } from './Project.entity';
type TTask = {
  task_id: number;
  task_name: string;
  project_id: Project;
  user_id: User;
  description: string;
  due_date: Date;
  status: 'pending' | 'in progress' | 'completed';
  priority: ' low' | 'medium' | 'high';
  created_at: Date;
  updated_at: Date;
};


@Entity()
export class Task {

  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  task_name: string;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinTable()
  project_id: Project;

  @ManyToOne(() => User, (user) => user.tasks)
  @JoinTable()
  user_id: User;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  status: 'pending' | 'in progress' | 'completed';

  @Column()
  priority: ' low' | 'medium' | 'high';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

}

