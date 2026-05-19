import { marketPlaceAPIClient } from "../api/market-place";
import {
  RegisterHttpParams,
  RegisterHttpResponse,
} from "../interfaces/http/register";

export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceAPIClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData,
  );

  return data;
};
