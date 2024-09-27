import { Branch, Commit, Contributor, FileStructure } from "@/types/type";
import { axiosInstance } from "./axios";

export const fetchProject = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    console.log(response.data, "response.data");
    return response.data;
  } catch (error) {
    console.log(error, "response.error");
    return null;
  }
};

export const fetchBranches = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchCommit = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchAllCommit = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchFile = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const fetchContributor = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProjectId = async ({
  owner,
  repoName,
}: {
  owner: string;
  repoName: string;
}) => {
  console.log(`/${owner}/${repoName}`);
  const projectIdentifier = encodeURIComponent(`${owner}/${repoName}`);
  const project = await fetchProject(`/${projectIdentifier}`);
  return project.id;
};

export async function getData({
  root,
  owner,
  repoName,
}: {
  root: string[];
  owner: string;
  repoName: string;
}) {
  interface DefaultReturnValue {
    initialBranch: string;
    data: FileStructure[];
    commits: Commit[];
    contributors: Contributor[];
    totalCommits: number;
    projectId: number;
    branchName: string[];
  }
  const defaultReturnValue: DefaultReturnValue = {
    initialBranch: "main",
    data: [],
    commits: [],
    contributors: [],
    totalCommits: -1,
    projectId: -1,
    branchName: [],
  };
  const projectIdentifier = encodeURIComponent(`${owner}/${repoName}`);
  console.log(projectIdentifier, "projectIdentifier");
  const project = await fetchProject(`${projectIdentifier}`);
  if (!project) return defaultReturnValue;

  const projectId = project.id;
  defaultReturnValue.projectId = projectId;

  const branches: Branch[] = await fetchBranches(
    `/${projectId}/repository/branches`
  );
  if (!branches) return defaultReturnValue;

  const branchName: string[] = branches.map((branch) => branch.name);
  defaultReturnValue.branchName = branchName;

  const branch = root[0] || "main";
  const path = root.length > 1 ? root.slice(1).join("/") : "";
  defaultReturnValue.initialBranch = branch;

  const data: FileStructure[] = await fetchData(
    `/${projectId}/repository/tree/?ref=${branch}&path=${path}`
  );
  defaultReturnValue.data = data;
  if (!data) return defaultReturnValue;
  const commits: Commit[] = await Promise.all(
    data.map(async (file) => {
      const res = await fetchCommit(
        `/${projectId}/repository/commits?path=${file.path}&ref_name=${branch}`
      );
      return res;
    })
  );
  if (!commits) return defaultReturnValue;
  defaultReturnValue.commits = commits;

  const allCommits: Commit[] = await fetchAllCommit(
    `/${projectId}/repository/commits`
  );
  defaultReturnValue.totalCommits = allCommits.length;
  if (!allCommits) return defaultReturnValue;
  const contributors: Contributor[] = await fetchContributor(
    `/${projectId}/repository/contributors`
  );
  if (!contributors) return defaultReturnValue;
  defaultReturnValue.contributors = contributors;

  return defaultReturnValue;
}
