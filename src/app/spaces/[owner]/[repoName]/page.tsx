import HuggingFaceDataset from "@/components/owner_repoName/HuggingFaceDataset";
import { axiosInstance } from "@/utils/axios";
import { fetchFile, getData } from "@/utils/getData";
import ReadmeViewer from "@/components/ReadmeViewer";
import { Project } from "@/types/project";

const page = async ({
  params,
}: {
  params: { owner: string; repoName: string; branch: string };
}) => {
  console.log(params, "params");

  const { projectId, tagsData } = await getData({
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
    `/projects/${projectId}/repository/files/${filePath}/raw?ref=${"main"}`
  );

  const pathname = `/${params.owner}/${params.repoName}`;

  return (
    <div>
      <HuggingFaceDataset
        tagsData={tagsData}
        pathname={pathname}
        owner={params.owner}
        repoName={params.repoName}
        rootPath={"dataset"}
      >
        {file ? (
          <ReadmeViewer readme={file} />
        ) : (
          <div>No description found</div>
        )}
      </HuggingFaceDataset>
    </div>
  );
};

export async function generateStaticParams() {
  const project: Project[] = await axiosInstance
    .get("/projects")
    .then((res) => res.data);

  return project.map((project) => {
    const owner = project.path_with_namespace.split("/")[0];
    const repoName = project.path_with_namespace.split("/")[1];
    // console.log(owner, repoName);
    return { owner, repoName };
  });
}

export default page;
