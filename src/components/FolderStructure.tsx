import getFileIcon from "@/app/utils/fileTypeIcon";
import TimeAgo from "@/components/TimeAgo";
import { Commit, FileStructure } from "@/types/type";
import Link from "next/link";
import { FaFolder } from "react-icons/fa";
import File from "./File";

const FolderStructure = ({
  treeStructure,
  branch,
  owner,
  repoName,
  commits,
  projectId,
  rootPath,
}: {
  treeStructure: FileStructure[];
  branch: string;
  owner: string;
  repoName: string;
  commits: Commit[];
  projectId: number;
  rootPath: string;
}) => {
  if (treeStructure.length === 0) return <p>No Tree found</p>;
  return (
    <div>
      {treeStructure.length > 0 &&
        treeStructure.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-2 px-4 border-b border-zinc-800"
          >
            <Link
              href={`/${rootPath}/${owner}/${repoName}/tree/${branch}/path/${data.path}`}
              className="flex items-center gap-2 w-1/4 min-w-0"
            >
              {data.type === "tree" ? (
                <FaFolder className="w-5 h-5 flex-shrink-0" />
              ) : (
                <>{getFileIcon(data.name, "w-5 h-5 flex-shrink-0")}</>
              )}
              <div className="truncate hover:underline">{data.name}</div>
            </Link>
            <div className="w-1/4 truncate text-end me-8">
              {data.type === "blob" ? (
                <File projectId={projectId} path={data.path} branch={branch} />
              ) : null}
            </div>
            <div className="w-1/4 truncate">{commits[index].title}</div>
            <div className="w-1/4 text-sn truncate flex justify-end">
              <TimeAgo date={new Date(commits[index].committed_date)} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FolderStructure;
