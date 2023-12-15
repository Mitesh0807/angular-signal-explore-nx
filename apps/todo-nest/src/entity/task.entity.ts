
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from '../interface/todo';

@Entity()
export class TaskEntity implements Task {

  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  task_name: string;

  @Column()
  project_id: number;

  @Column()
  user_id: number;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  status: string;

  @Column()
  priority: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}

