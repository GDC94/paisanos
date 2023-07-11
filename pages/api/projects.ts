import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { DATA_URL } from "config";

const useGetProjects = async (_req: NextApiRequest, res: NextApiResponse) => {
  await axios
    .get(`${DATA_URL?.PROJECTS}`)
    .then((response) => {
      return res
        .setHeader("Access-Control-Allow-Credentials", "true")
        .setHeader("Content-Type", "application/json")
        .setHeader(
          "Access-Control-Allow-Origin",
          "https://german.vercel.app",
        )
        .setHeader("Access-Control-Allow-Methods", "GET,OPTIONS")
        .setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
        )
        .status(200)
        .send(response.data);
    })
    .catch((error) => {
      return res.status(error?.response?.status).send(error);
    });
};
export default useGetProjects;
