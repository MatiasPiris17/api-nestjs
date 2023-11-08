import { BaseEntity } from "src/config/base.entity";
import { IProject } from "src/interface/project.interface";
import { Column, Entity } from "typeorm";

Entity({ name: 'projects' })
export class ProjectsEntity extends BaseEntity implements IProject {
    @Column()
    name: string;
    
    @Column()
    description: string;
}
