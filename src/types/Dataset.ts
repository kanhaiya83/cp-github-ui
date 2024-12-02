import { Project } from "./project"
import { User } from "./User"

export interface Dataset{
    gitlab_id: number
    name: string
    description: string
    modalities: string[]
    format: string[]
    likes: number
    user: User
    created_at: Date
    license: string
    visibility: string
    repositoy:Project
}