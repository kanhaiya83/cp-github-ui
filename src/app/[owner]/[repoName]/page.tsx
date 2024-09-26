import { getData } from "@/app/utils/getData";
import FilesAndFolderLayout from "@/components/FilesAndFolderLayout";
import { Project } from "@/types/project";

const page = async ({
  params,
}: {
  params: { owner: string; repoName: string };
}) => {
  const { owner, repoName } = params;
  const {
    data,
    initialBranch,
    commits,
    contributors,
    totalCommits,
    projectId,
    branchName,
  } = await getData({
    root: [],
    owner,
    repoName,
  });
  if (projectId === -1) return <p>No hello Found</p>;

  return (
    <div>
      <FilesAndFolderLayout
        initialBranch={initialBranch}
        path=""
        data={data}
        owner={owner}
        repoName={repoName}
        commits={commits}
        contributors={contributors}
        totalCommits={totalCommits}
        projectId={projectId}
        branchName={branchName}
      />
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
