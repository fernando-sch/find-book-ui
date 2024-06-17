import axios from "axios";
import { EnvVariables } from "../config/EnvVariables";

export const searchBook = async (input: string) => {
  try {
    const response = await axios.get(`${EnvVariables.apiUrl}/books`, {
      params: { search: input },
    });

    return response.data.data;
  } catch (error) {
    return null;
  }
};
