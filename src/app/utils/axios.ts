import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.GIT_REPO_URL,
  headers: {
    Authorization: `Bearer ${process.env.GITLAB_ACCESS_TOKEN}`,
  },
});
