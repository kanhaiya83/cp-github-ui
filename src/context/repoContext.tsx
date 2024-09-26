"use client";
import {
  fetchAllCommit,
  fetchBranches,
  fetchCommit,
  fetchContributor,
  fetchData,
  fetchProject,
} from "@/app/utils/getData";
import { Branch, Commit, Contributor, FileStructure } from "@/types/type";
import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  tree: FileStructure[] | null;
  commits: Commit[] | null;
  contributors: Contributor[] | null;
  loading: boolean;
  projectId: string;
  initialBranch: string;
  branches: Branch[];
  fetchDataAsync: ({
    root,
    owner,
    repoName,
  }: {
    root: string[];
    owner: string;
    repoName: string;
  }) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tree, setTree] = useState<FileStructure[] | null>(null);
  const [commits, setCommits] = useState<Commit[] | null>(null);
  const [contributors, setContributors] = useState<Contributor[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [projectId, setProjectId] = useState("");
  const [initialBranch, setInitialBranch] = useState("main");
  const [branches, setBranches] = useState<Branch[]>([]);

  const fetchDataAsync = async ({
    root,
    owner,
    repoName,
  }: {
    root: string[];
    owner: string;
    repoName: string;
  }) => {
    const projectIdentifier = encodeURIComponent(`${owner}/${repoName}`);
    const project = await fetchProject(`/${projectIdentifier}`);

    if (!project) return;
    setProjectId(project.id);
    setInitialBranch(root?.[0] || "main");
    const branch = root[0] || "main";
    const path = root.length > 1 ? root.slice(1).join("/") : "";

    const branches: Branch[] = await fetchBranches(
      `/${projectId}/repository/branches`
    );
    if (!branches) return;
    setBranches(branches);

    const treeData: FileStructure[] = await fetchData(
      `/${projectId}/repository/tree/?ref=${branch}&path=${path}`
    );
    if (!treeData) return;
    setTree(treeData);

    const commits: Commit[] = await Promise.all(
      treeData.map(async (file) => {
        const res = await fetchCommit(
          `/${projectId}/repository/commits?path=${file.path}&ref_name=${branch}`
        );
        return res;
      })
    );
    if (!commits) return;
    setCommits(commits);

    const allCommits: Commit[] = await fetchAllCommit(
      `/${projectId}/repository/commits`
    );
    if (!allCommits) return;
    setCommits(allCommits);

    const contributors: Contributor[] = await fetchContributor(
      `/${projectId}/repository/contributors`
    );
    if (!contributors) return;
    setContributors(contributors);

    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        tree,
        commits,
        contributors,
        projectId,
        initialBranch,
        branches,
        loading,
        fetchDataAsync,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
