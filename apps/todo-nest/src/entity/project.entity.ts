import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../interface/todo';

@Entity()
export class ProjectEntity implements Project {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  project_name: string;

  @Column()
  user_id: number;

  @Column()
  created_at: Date;
}
