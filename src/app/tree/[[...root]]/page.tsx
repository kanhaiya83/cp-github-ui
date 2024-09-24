import { IoIosGitNetwork } from "react-icons/io";
import axios from "axios";
import { FileStructure } from "@/app/types/type";
import FolderStructure from "@/app/FolderStructure";
import SelectBranch from "@/components/SelectBranch";

const fetchData = async (url: string) => {
  const baseUrl = process.env.GIT_REPO_URL;
  const response = await axios.get(`${baseUrl}/${url}`);
  return response.data;
};

export async function getData({ params }: { params: { root: string[] } }) {
  const branch = params.root[0] || "main";
  const path = params.root.slice(1).join("/");

  const data: FileStructure[] = await fetchData(
    `/55/repository/tree/?ref=${branch}&path=${path}`
  );

  return {
    initialBranch: branch,
    data,
  };
}
export default async function Page({ params }: { params: { root: string[] } }) {
  console.log(params);
  const branch = params.root[0];
  const path = params.root.slice(1).join("/");
  const { data, initialBranch } = await getData({ params });

  // const [currentBranch, currentPath] = ;
  return (
    <div className="flex justify-center items-center mt-10 w-full">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="p-4">
          <section className="flex justify-between mb-4 items-center flex-wrap gap-10 rounded-none">
            <div className="flex gap-3.5 text-sm leading-none whitespace-nowrap text-neutral-400">
              <SelectBranch initialBranch={initialBranch} path={path} />
              <h2 className="my-auto">Longwik</h2>
            </div>
            <div className="flex gap-7 items-center">
              <div className="flex flex-col justify-center items-center self-stretch px-0.5 my-auto w-5 h-5 bg-violet-500 rounded-full border border-solid border-stone-300">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcbe3e3ea3caef502d6e61008557f88e5260b8eaca2ebcdda7dbe2db92446d24?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                  alt=""
                  className="object-contain z-10 w-5 rounded-full aspect-square"
                />
              </div>
              <p className="self-stretch my-auto text-sm leading-none text-neutral-400">
                {2} contributors
              </p>
              <button className="flex gap-2 self-stretch px-3 py-1.5 text-sm leading-none rounded-md border border-solid bg-zinc-800 border-zinc-700 text-neutral-400">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af336e2f2e3523f0e6773064038bdcad68176605edb845336c948ebe3297d450?placeholderIfAbsent=true&apiKey=3ffd321d22914a748ca8bbca39c4d0b3"
                  alt=""
                  className="object-contain shrink-0 my-auto aspect-[0.73] w-[11px]"
                />
                <span className="basis-auto">History: {6} Commits</span>
              </button>
            </div>
          </section>
          <div className="flex flex-col text-base leading-none rounded-none text-neutral-400">
            <div className="flex flex-col pb-5 w-full rounded-t-xl border border-solid h-fit bg-zinc-950 border-zinc-800 max-md:max-w-full">
              <header className="flex flex-wrap gap-5 justify-between px-5 py-4 w-full font-semibold rounded-t-xl border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full">
                <div className="flex gap-5">
                  <div className="flex shrink-0 self-start bg-violet-500 rounded-full h-[13px] w-[13px]" />
                  <div>bys0318</div>
                  <div className="basis-auto">Update README.md</div>
                  <div>0db15c0</div>
                  <div>verified</div>
                </div>
                <div>15 days ago</div>
              </header>
              <section className="flex flex-wrap gap-5 justify-between items-center self-center mt-3.5 w-full max-w-[1450px] max-md:max-w-full">
                <ul className="w-full flex flex-col self-stretch my-auto whitespace-nowrap list-none p-0">
                  {data?.length > 0 && (
                    <FolderStructure
                      treeStructure={data}
                      branch={initialBranch}
                    />
                  )}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
