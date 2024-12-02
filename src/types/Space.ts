
export interface Space {
  _id: string;
  id: number;
  // icon: string;
  name: string;
  status: string;
  isPinned: boolean;
  likes: number;
  created_at: Date,
  description: string;
  licence: string;
  sdk: 'streamlit' | 'gradio' | 'docker' | 'static';
  sdk_template: string,
  hardware_type: string;
  type: 'public' | 'private';
  deployed_url?: string;
  user: {
    _id: string,
    name:string,
    username: string,
    display_photo:string
  };
  gitlab_project_id: number;
  visibility: string;
  path_with_namespace:string;
}