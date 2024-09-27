import HuggingFaceDataset from "@/app/dataset/components/HuggingFaceDataset";
import { fetchFile, getProjectId } from "@/app/utils/getData";
import ReadmeViewer from "@/components/ReadmeViewer";

const page = async ({
  params,
}: {
  params: { owner: string; repoName: string };
}) => {
  console.log(params, "params");
  const projectId = await getProjectId({
    owner: params.owner,
    repoName: params.repoName,
  });
  console.log(projectId, "projectId");
  const filePath = encodeURIComponent(`README.md`);
  const file = await fetchFile(
    `/${projectId}/repository/files/${filePath}/raw?ref=${"main"}`
  );

  const pathname = `/${params.owner}/${params.repoName}`;

  return (
    <div>
      <HuggingFaceDataset pathname={pathname}>
        <ReadmeViewer readme={file} />
      </HuggingFaceDataset>
    </div>
  );
};

// export async function generateStaticParams() {
//   const project: Project[] = await fetch(
//     "https://git.clusterprotocol.ai/api/v4/projects"
//   ).then((res) => res.json());

//   return project.map((project) => {
//     const owner = project.path_with_namespace.split("/")[0];
//     const repoName = project.path_with_namespace.split("/")[1];
//     // console.log(owner, repoName);
//     return { owner, repoName };
//   });
// }

export default page;
