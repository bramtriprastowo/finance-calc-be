import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('user')

export class User extends BaseEntity {
    @Unique(['email', 'username'])
    
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    username: string

    @Column('int')
    balance: number

    @Column('boolean')
    isActive: boolean
}