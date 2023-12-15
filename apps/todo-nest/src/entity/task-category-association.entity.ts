import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskCategoryAssociation } from '../interface/todo';


@Entity()
export class TaskCategoryAssociationEntity implements TaskCategoryAssociation {

  @PrimaryGeneratedColumn()
  task_id: number;

  @Column()
  category_id: number;

  @Column()
  created_at: Date;
}


