import { BaseEntity } from "src/config/base.entity";
import { IUser } from "src/interface/user.interface";
import { Column, Entity } from "typeorm";

Entity({name:'users'})
export class UsersEntity extends BaseEntity implements IUser {
    @Column()
    firsName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}