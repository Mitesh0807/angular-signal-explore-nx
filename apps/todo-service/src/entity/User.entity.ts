import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type TUser = {
  id: number,
  name: string,
  email: string,
  password: string,
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
  //default true
  @Column({ default: true })
  isActive: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  deletedAt: Date;
}
