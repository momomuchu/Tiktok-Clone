import { config } from "~/config";
import { request } from "~/utils/axiosInstance";

export const register = async ({ email, password, type }) => {
  const res = await request.post(config.authApi.register, {
    email,
    password,
    type,
  });
  return res;
};

export const login = async ({ email, password }) => {
  const res = await request.post(config.authApi.login, {
    email,
    password,
  });
  return res;
};

export * as userService from "~/services/userService";
