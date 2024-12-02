import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
interface PushEventBody {
    object_kind: 'push';
    event_name: 'push';
    before: string;
    after: string;
    ref: string;
    ref_protected: boolean;
    checkout_sha: string;
    message: string;
    user_id: number;
    user_name: string;
    user_email: string;
    user_avatar: string;
    project_id: number;
    project: {
      id: number;
      name: string;
      description: string;
      web_url: string;
      avatar_url: string;
      git_ssh_url: string;
      git_http_url: string;
      namespace: string;
      visibility_level: number;
      path_with_namespace: string;
      default_branch: string;
    };
    commits: {
      id: string;
      message: string;
      title: string;
      timestamp: string;
      url: string;
      author: {
        name: string;
        email: string;
      };
    }[];
    total_commits_count: number;
    push_options: {
      ci?: {
        skip?: boolean;
      };
    };
  }

export async function POST(request: Request) {
    const requestBody:PushEventBody = await request.json()
    console.log({requestBody})
    revalidatePath(`/datasets/${requestBody.project.path_with_namespace}`, 'page')
    revalidatePath(`/datasets/${requestBody.project.path_with_namespace}/tree/main`, 'page')
    revalidatePath(`/spaces/${requestBody.project.path_with_namespace}`, 'page')
    revalidatePath(`/spaces/${requestBody.project.path_with_namespace}/tree/main`, 'page')
    revalidatePath(`/models/${requestBody.project.path_with_namespace}`, 'page')
    revalidatePath(`/models/${requestBody.project.path_with_namespace}/tree/main`, 'page')
    return NextResponse.json({
        success:true
    })
}
