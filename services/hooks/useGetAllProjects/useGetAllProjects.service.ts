import useSWR from "swr";
import { useMemo } from "react";
import { Project } from "typing";
import { API_URLS } from "config";

const useGetAllProjects = () => {
  const { data, ...rest } = useSWR<Project[]>(`${API_URLS?.PROJECTS}`);
  const projects: Project[] | null = useMemo(() => data ?? null, [data]);

  return {
    projects,
    ...rest,
  };
};

export default useGetAllProjects;
