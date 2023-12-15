import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../interface/todo';

@Entity()
export class UserEntity implements User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password_hash: string;

  @Column()
  email: string;

  @Column()
  created_at: Date;
}



