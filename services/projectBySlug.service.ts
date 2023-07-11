import axios from "axios";
import { API_URLS } from "config";

const getProjectBySlug = async (slug: string) => {
  const { data } = await axios.get(`${API_URLS?.PROJECTS_BY_SLUG}/${slug}`);
  return data;
};

export default getProjectBySlug;
