import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Project } from './Project.entity';

export type TUser = {
  id: number,
  name: string,
  email: string,
  password: string,
  projects: Project[],
  isActive: boolean,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
}
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Project, (project) => project.user_id)
  projects: Project[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
