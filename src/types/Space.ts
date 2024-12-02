import { Project } from "./project";
import { User } from "./User";

export interface Space {
  name: string;
  description: string;
  liscense: string;
  sdk: 'streamlit' | 'gradio' | 'docker' | 'static';
  sdk_template: string,
  hardware_type: string;
  type: 'public' | 'private';
  deployed_url?: string;
  user: User;
  gitlab_id: number;
  visibility: string;
  path_with_namespace: string;
  created_at: Date;
  status:string;
  repository:Project
}