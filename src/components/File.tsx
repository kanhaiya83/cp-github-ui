import { fetchFile } from "@/utils/getData";
import { IFile } from "@/types/type";
import { filesize } from "filesize";
import FileDownloadButton from "./FileDownloadButton";

const File = async ({
  projectId,
  path,
  branch,
}: {
  projectId: number;
  path: string;
  branch: string;
}) => {
  const urlEncodedPath = encodeURIComponent(path);
  const file: IFile = await fetchFile(
    `/projects/${projectId}/repository/files/${urlEncodedPath}?ref=${branch}`
  );
  if (!file) return null;
  return (
    <div className="flex justify-end gap-2 items-center">
      <span>{filesize(file.size)}</span>
      <span>
        <FileDownloadButton projectId={projectId} path={path} branch={branch} />
      </span>
    </div>
  );
};

export default File;
