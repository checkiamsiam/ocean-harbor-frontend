import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { ILoginCredentials } from "@/types";

const auth_url = "/auth";

export const loginWithCredential = async (body: ILoginCredentials): Promise<any> => {
  const res = await axiosInstance({
    url: auth_url + "/login",
    method: "POST",
    data: body,
  });
  return res;
};
