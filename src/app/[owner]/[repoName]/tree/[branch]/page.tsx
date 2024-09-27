import HuggingFaceDataset from "@/app/dataset/components/HuggingFaceDataset";
import { axiosInstance } from "@/app/utils/axios";
import { getData } from "@/app/utils/getData";
import FilesAndFolderLayout from "@/components/FilesAndFolderLayout";
import { Project } from "@/types/project";
import { Branch } from "@/types/type";

export default async function Page({
  params,
}: {
  params: { owner: string; repoName: string; branch: string };
}) {
  console.log(params, "root-params");

  const {
    data,
    initialBranch,
    commits,
    contributors,
    totalCommits,
    projectId,
    branchName,
    tagsData,
  } = await getData({
    currentBranch: params.branch,
    root: [],
    owner: params.owner,
    repoName: params.repoName,
  });

  if (projectId === -1) return <p>No data Found</p>;
  const pathname = `/${params.owner}/${params.repoName}`;

  return (
    <HuggingFaceDataset
      owner={params.owner}
      repoName={params.repoName}
      tagsData={tagsData}
      pathname={pathname}
    >
      <FilesAndFolderLayout
        initialBranch={initialBranch}
        path={""}
        data={data}
        owner={params.owner}
        repoName={params.repoName}
        commits={commits}
        contributors={contributors}
        totalCommits={totalCommits}
        projectId={projectId}
        branchName={branchName}
      />
    </HuggingFaceDataset>
  );
}

export async function generateStaticParams() {
  const project: Project[] = await axiosInstance
    .get("https://git.clusterprotocol.ai/api/v4/projects")
    .then((res) => res.data);

  const data = await Promise.all(
    project.map(async (project) => {
      let branches: Branch[] | [{ name: string }] = await axiosInstance
        .get(
          `https://git.clusterprotocol.ai/api/v4/projects/${project.id}/repository/branches`
        )
        .then((res) => res.data);
      branches = branches.length ? branches : [{ name: "main" }];

      const owner = project.path_with_namespace.split("/")[0];
      const repoName = project.path_with_namespace.split("/")[1];

      const branchesData = branches.map((branch) => {
        // console.log({ owner, repoName, branch: branch.name });
        return { owner, repoName, branch: branch.name };
      });
      // console.log(owner, repoName);
      return branchesData;
    })
  );
  console.log(data.flat(), "static-data");
  return data.flat();
}

// https://git.clusterprotocol.ai/api/v4/projects/ucirvine%2Fsms_spam
