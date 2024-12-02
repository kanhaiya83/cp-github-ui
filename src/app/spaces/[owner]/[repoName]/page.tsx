import HuggingFaceDataset from "@/components/owner_repoName/HuggingFaceDataset";
import { axiosInstance } from "@/utils/axios";
import { fetchFile, getData } from "@/utils/getData";
import ReadmeViewer from "@/components/ReadmeViewer";
import { Project } from "@/types/project";
import Header from "@/components/owner_repoName/Header";
import SpaceIframe from "./components/SpaceIframe";
import { publicRequest } from "@/config/request";
import { Space } from "@/types/Space";

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
  const spaceRequestReponse = await publicRequest(`/spaces/namespace/${params.owner}/${params.repoName}`)
  const spaceData:Space = spaceRequestReponse.data

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
        <SpaceIframe url={spaceData.deployed_url || `https://${params.owner}-${params.repoName}.spaces-dev.clusterprotocol.io`} emptyRepo={!spaceData.deployed_url && !file}/>
      </HuggingFaceDataset>
    </div>
  );
};

export async function generateStaticParams() {

  const spaceData = await publicRequest("/spaces/all")
  const allSpaces:Space[] = spaceData.data.data

  return allSpaces.map((space) => {
    const owner = space.path_with_namespace.split("/")[0];
    const repoName = space.path_with_namespace.split("/")[1];
    return { owner, repoName };
  });
}

export default page;
