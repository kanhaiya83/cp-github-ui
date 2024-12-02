import RepositoryViewContainer from "@/components/owner_repoName/RepositoryViewContainer";
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
      <RepositoryViewContainer
        tagsData={tagsData}
        pathname={pathname}
        owner={params.owner}
        repoName={params.repoName}
        rootPath={"datasets"}
      >
        {file ? (
          <ReadmeViewer readme={file} />
        ) : (
          <div>No description found</div>
        )}
      </RepositoryViewContainer>
    </div>
  );
};

export async function generateStaticParams() {
  const projectsResp = await axiosInstance
    .get("/projects")
    console.log({projectsResp})
    const projectsData :Project[]= projectsResp.data
  return projectsData.map((project) => {
    const owner = project.path_with_namespace.split("/")[0];
    const repoName = project.path_with_namespace.split("/")[1];
    // console.log(owner, repoName);
    return { owner, repoName };
  });
}

export default page;
