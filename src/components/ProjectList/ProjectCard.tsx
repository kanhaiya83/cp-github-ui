import { Project } from "@/types/project";
import Link from "next/link";
import { IoMdGrid } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { formatDistanceToNow } from "date-fns";

const ProjectCard = ({ project, link }: { project: Project; link: string }) => {
  return (
    <Link href={link}>
      <article className="flex flex-col text-sm leading-none rounded-none max-w-[487px]">
        <div className="flex flex-wrap gap-5 py-3.5 pr-14 pl-5 w-full bg-black rounded-md border border-solid border-zinc-700 max-md:px-5 max-md:max-w-full hover:bg-slate-800 cursor-pointer ">
          <div className="flex flex-auto gap-1">
            <div className="flex flex-col grow gap-2 shrink-0 basis-0 w-fit">
              <h2 className="self-start text-white">{project.name}</h2>
              <div className="flex flex-row justify-start items-center gap-2 text-neutral-500">
                <div className="flex gap-1">
                  <span>
                    <IoMdGrid />
                  </span>
                  <span>Viewer</span>
                </div>
                <GoDotFill />
                <div className="flex gap-1">
                  <span>
                    Updated{formatDistanceToNow(project.last_activity_at)} ago
                  </span>
                </div>
                <GoDotFill />
                <div className="flex gap-1">
                  <span>
                    <MdFileDownload />
                  </span>
                  <span>{project.forks_count || 0}</span>
                </div>
                <GoDotFill />
                <div className="flex gap-1">
                  <span>
                    <CiHeart />
                  </span>
                  <span>{project.star_count || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
