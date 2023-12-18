import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User.entity';



export type TProject = {
  project_id: number;
  project_name: string;
  user_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
};

@Entity()
export class Project {

  @PrimaryGeneratedColumn()
  project_id: number;

  @Column()
  project_name: string;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinTable()
  user_id: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

