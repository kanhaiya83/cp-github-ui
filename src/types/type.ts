export interface FileStructure {
  id: string; // Unique identifier for the file or directory
  name: string; // Name of the file or directory
  type: "tree" | "blob"; // Type of the item (directory or file)
  path: string; // Path to the file or directory
  mode: string; // File mode (permissions)
}

export interface FileAndFolderLayoutProps {
  initialBranch: string;
  path: string;
  data: FileStructure[];
  owner: string;
  repoName: string;
  commits: Commit[];
  contributors: Contributor[];
  totalCommits: number;
  projectId: number;
  branchName: string[];
}

export interface IFile {
  file_name: string;
  file_path: string;
  size: number;
  encoding: string;
  content_sha256: string;
  ref: string;
  blob_id: string;
  commit_id: string;
  last_commit_id: string;
  execute_filemode: boolean;
  content: string;
}

export interface Contributor {
  name: string;
  email: string;
  commits: number;
  additions: number;
  deletions: number;
}

export interface Commit {
  id: string;
  short_id: string;
  created_at: string; // ISO 8601 format
  parent_ids: string[];
  title: string;
  message: string;
  author_name: string;
  author_email: string;
  authored_date: string; // ISO 8601 format
  committer_name: string;
  committer_email: string;
  committed_date: string; // ISO 8601 format
  trailers: Record<string, unknown>; // Adjust type if you know the structure
  extended_trailers: Record<string, unknown>; // Adjust type if you know the structure
  web_url: string;
}

export interface Branch {
  name: string;
  commit: Commit;
  merged: boolean;
  protected: boolean;
  developers_can_push: boolean;
  developers_can_merge: boolean;
  can_push: boolean;
  default: boolean;
  web_url: string;
}

export interface ITagsData {
  like: number;
  tasks: string;
  language: string;
  dataset_type: string;
  dataset_size: string;
  license: string;
  modalities: string[];
  format: string;
  sub_tasks: string;
  size: string;
  libraries: string;
  pandas: string;
  croissant: string;
}
