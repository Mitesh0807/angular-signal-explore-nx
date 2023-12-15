import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskCategory } from '../interface/todo';

@Entity()
export class TaskCategoryEntity implements TaskCategory {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column()
  category_name: string;

  @Column()
  created_at: Date;
}
