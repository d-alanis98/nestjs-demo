import { Entity, Column, PrimaryColumn } from 'typeorm';


@Entity()
export class User {
    @PrimaryColumn()
    uri_user: string;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

}


export interface UserPrimitives {
    name: string;
    email: string;
    uri_user: string;
    lastname: string;
}