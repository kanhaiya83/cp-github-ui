import { Project } from "./project"
import { User } from "./User"

export interface Model{

    name: string
    description: string
    gitlab_id: number
    likes: number
    user: User
    created_at: Date
    license: string
    visibility: string;
    repository:Project
}