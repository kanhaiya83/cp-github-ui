import HuggingFaceDataset from "@/app/dataset/components/HuggingFaceDataset";
import { fetchFile, getData, getProjectId } from "@/app/utils/getData";
import ReadmeViewer from "@/components/ReadmeViewer";
import { Project } from "@/types/project";

const page = async ({
  params,
}: {
  params: { owner: string; repoName: string; branch: string };
}) => {
  console.log(params, "params");

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
  // const projectId = await getProjectId({
  //   owner: params.owner,
  //   repoName: params.repoName,
  // });
  console.log(projectId, "projectId");
  if (projectId === -1) {
    return <div>Project not found</div>;
  }
  const filePath = encodeURIComponent(`README.md`);
  const file = await fetchFile(
    `/${projectId}/repository/files/${filePath}/raw?ref=${"main"}`
  );

  const pathname = `/${params.owner}/${params.repoName}`;

  return (
    <div>
      <HuggingFaceDataset
        tagsData={tagsData}
        pathname={pathname}
        owner={params.owner}
        repoName={params.repoName}
      >
        <ReadmeViewer readme={file} />
      </HuggingFaceDataset>
    </div>
  );
};

export async function generateStaticParams() {
  const project: Project[] = await fetch(
    "https://git.clusterprotocol.ai/api/v4/projects"
  ).then((res) => res.json());

  return project.map((project) => {
    const owner = project.path_with_namespace.split("/")[0];
    const repoName = project.path_with_namespace.split("/")[1];
    // console.log(owner, repoName);
    return { owner, repoName };
  });
}

export default page;
