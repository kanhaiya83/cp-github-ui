import HuggingFaceDataset from "@/components/owner_repoName/HuggingFaceDataset";
import { axiosInstance } from "@/utils/axios";
import { fetchFile, getData } from "@/utils/getData";
import ReadmeViewer from "@/components/ReadmeViewer";
import { Project } from "@/types/project";
import Header from "@/components/owner_repoName/Header";
import SpaceIframe from "./components/SpaceIframe";

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
      {/* <Header rootPath="spaces" pathname={pathname}/> */}
      <HuggingFaceDataset
        // tagsData={tagsData}
        pathname={pathname}
        owner={params.owner}
        repoName={params.repoName}
        rootPath={"spaces"}
      >
        <SpaceIframe url={`https://${params.owner}-${params.repoName}.spaces-dev.clusterprotocol.io`} emptyRepo={!file}/>
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
