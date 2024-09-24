// src/components/SelectBranch.tsx
"use client";
import { useRouter } from "next/navigation";
import { IoIosGitNetwork } from "react-icons/io";
import { usePathname } from "next/navigation";

interface SelectBranchProps {
  initialBranch: string;
  path: string;
}

const SelectBranch: React.FC<SelectBranchProps> = ({ initialBranch,path }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const branches = ["main", "w"]; // Example branches

  const handleBranchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBranch = e.target.value;
    // Navigate to the new branch
    router.push(`/tree/${selectedBranch}/${path}`);
  };

  return (
    <div className="bg-zinc-800 border-zinc-700 text-neutral-400 rounded-md flex justify-center items-center px-2 py-1 ">
      <IoIosGitNetwork />
      <select
        className="bg-zinc-800 border-zinc-700 text-neutral-400"
        value={initialBranch}
        onChange={handleBranchChange}
      >
        {branches.map((branch) => (
          <option className="px-2 py-1" key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBranch;
