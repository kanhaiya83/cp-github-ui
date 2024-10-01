import HuggingFaceDataset from "@/components/owner_repoName/HuggingFaceDataset";
import { getData } from "@/app/utils/getData";
import FilesAndFolderLayout from "@/components/FilesAndFolderLayout";

export default async function Page({
  params,
}: {
  params: { owner: string; repoName: string; branch: string; root: string[] };
}) {
  console.log(params, "root-params");
  const root = params.root || [];
  const path = root.join("/") || "";
  console.log(path, "path-root");

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
    root: params.root,
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
      rootPath={"dataset"}
    >
      <FilesAndFolderLayout
        initialBranch={initialBranch}
        path={path}
        data={data}
        owner={params.owner}
        repoName={params.repoName}
        rootPath={"dataset"}
        commits={commits}
        contributors={contributors}
        totalCommits={totalCommits}
        projectId={projectId}
        branchName={branchName}
      />
    </HuggingFaceDataset>
  );
}
// https://git.clusterprotocol.ai/api/v4/projects/ucirvine%2Fsms_spam
