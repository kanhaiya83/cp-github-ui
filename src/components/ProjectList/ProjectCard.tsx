import { Project } from "@/types/project";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { generateAvatar } from "@/utils/avatar";

const ProjectCard = ({ project, link }: { project: Project; link: string }) => {
  return (
    <Link href={link}>
      <article className="flex flex-col text-sm leading-none rounded-none relative ">
        {/* Top-left Half Border */}
        {/* <div className="absolute top-0 left-0 h-1/2 w-1/2 border-t border-l border-[#62626A] pointer-events-none rounded-l"></div> */}

        {/* Bottom-right Half Border */}
        {/* <div className="absolute bottom-0 right-0 h-1/2 w-1/2 border-b border-r border-[#62626A] pointer-events-none rounded-r"></div> */}
        <div className="flex flex-wrap  py-2 px-5 w-full rounded-md  max-md:px-5 max-md:max-w-full  cursor-pointer card-hover-effect">
          <div className="flex flex-auto gap-1">
            <div className="flex flex-col grow gap-2 shrink-0 basis-0 w-fit">
            <Image className=" rounded-full w-[27%] mx-auto my-4 text-center" width={100} height={100} src={generateAvatar(project.id,"icons")} alt=""/>
            <h3 className=" text-center">
            {/* <span className="text-sm font-thin text-gray-400">{project.user.username}</span> / */}
               <span className="font-bold text-lg">{project.name}</span> </h3>
              <div className="flex flex-row justify-end items-center gap-2 text-neutral-500">
                {/* <div className="flex gap-1">
                  <span>
                    <IoMdGrid />
                  </span>
                  <span>Viewer</span>
                </div> */}
                {/* <GoDotFill /> */}
                <div className="flex ">
                  <span>
                    Updated {formatDistanceToNow(project.last_activity_at)} ago
                  </span>
                </div>
                {/* <GoDotFill /> */}
                {/* <div className="flex gap-1">
                  <span>
                    <MdFileDownload />
                  </span>
                  <span>{project.forks_count || 0}</span>
                </div> */}
                {/* <GoDotFill /> */}
                {/* <div className="flex gap-1">
                  <span>
                    <CiHeart />
                  </span>
                  <span>{project.star_count || 0}</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
