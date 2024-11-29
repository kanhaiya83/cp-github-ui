interface Socials {
    homepage?: string
    ai_ml_interests?: string
    github_username?: string
    twitter_username?: string
    linkedin_profile?: string
}
export interface IUser extends Document {
    name: string
    firebase_uid: string
    username: string
    email: string
    socials: Socials
    display_photo?: string
    gitlab_id?: number
}