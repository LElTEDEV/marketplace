import { create } from "zustand";
import { UserInterface } from "../interfaces/user";

interface SetSessionParams {
  userData: UserInterface;
  token: string;
  refreshToken: string;
}

interface UpdateTokensParams {
  token: string;
  refreshToken: string;
}

export interface UserStore {
  user: UserInterface | null;
  token: string | null;
  refreshToken: string | null;

  logout: () => void;
  setSession: (sessionData: SetSessionParams) => void;
  updateTokens: (updateTokensData: UpdateTokensParams) => void;
}

export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  token: null,
  refreshToken: null,

  logout: () => {},
  setSession: (sessionData) => set({ ...sessionData }),
  updateTokens: (updateTokensData) => set({ ...updateTokensData }),
}));
