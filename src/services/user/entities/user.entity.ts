import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')

export class User extends BaseEntity {  
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @Column({unique: true})
    username: string

    @Column('int')
    balance: number

    @Column('boolean')
    isActive: boolean
}