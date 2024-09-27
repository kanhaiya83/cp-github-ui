import HuggingFaceDataset from "@/app/dataset/components/HuggingFaceDataset";
import { getData } from "@/app/utils/getData";
import FilesAndFolderLayout from "@/components/FilesAndFolderLayout";

export default async function Page({
  params,
}: {
  params: { owner: string; repoName: string; root: string[] };
}) {
  console.log(params, "params");
  const path = params.root.slice(1).join("/");

  const {
    data,
    initialBranch,
    commits,
    contributors,
    totalCommits,
    projectId,
    branchName,
  } = await getData({
    root: params.root,
    owner: params.owner,
    repoName: params.repoName,
  });

  if (projectId === -1) return <p>No data Found</p>;
  const pathname = `/${params.owner}/${params.repoName}`;

  return (
    <HuggingFaceDataset pathname={pathname}>
      <FilesAndFolderLayout
        initialBranch={initialBranch}
        path={path}
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
// https://git.clusterprotocol.ai/api/v4/projects/ucirvine%2Fsms_spam
