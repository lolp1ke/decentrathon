import { config } from "@/config";
import type { WebApp, WebAppUser } from "@twa-dev/types";

type TUserData = {
  userData: WebAppUser | null;
  getUserInitials: () => string;
  getUser: () => Promise<TUserProfile>;
};
export type TProfile = {
  userId: number;
  id: number;

  type: "company" | "applicant";
  tags?: Array<string>;
  contacts?: string;
  location?: string;
  specialization?: string;
};
export type TUserProfile = {
  id: number;
  first_name: string;
  last_name?: string;
  email?: string;

  profile?: TProfile;
};

export function useUserData(webApp: WebApp): TUserData {
  let userData: WebAppUser | null = null;

  if (webApp.initDataUnsafe.user) {
    userData = webApp.initDataUnsafe.user;
  }

  if (import.meta.env.VITE_NODE_ENV === "development") {
    userData = {
      id: 111,
      first_name: "Alibek",
      last_name: "Engineer",
      is_premium: true,
      is_bot: false,
      photo_url: "https://picsum.photos/128/128",
    };
  }

  function getUserInitials(): string {
    return `${userData?.first_name.at(0)?.toUpperCase() || ""}${
      userData?.last_name?.at(0)?.toUpperCase() || ""
    }`;
  }

  async function getUser(): Promise<TUserProfile> {
    return await fetch(`${config.BACKEND_PREFIX}/user/get/${userData?.id}`, {
      method: "GET",
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  return {
    userData,
    getUserInitials,
    getUser,
  };
}
