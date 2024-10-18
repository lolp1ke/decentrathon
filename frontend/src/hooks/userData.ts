import type { WebApp, WebAppUser } from "@twa-dev/types";

type TUserData = {
  userData: WebAppUser | null;
  isCompany: () => boolean;
  getUserInitials: () => string;
};

export function useUserData(webApp: WebApp): TUserData {
  let userData: WebAppUser | null = null;

  if (webApp.initDataUnsafe.user) {
    userData = webApp.initDataUnsafe.user;
  } else {
    userData = {
      id: 314159265,
      first_name: "Alibek",
      last_name: "Engineer",
      is_premium: true,
      is_bot: false,
      photo_url: "https://picsum.photos/128/128",
    };
  }

  function isCompany(): boolean {
    return true;
  }
  function getUserInitials(): string {
    return `${userData?.first_name.at(0)?.toUpperCase()}${userData?.last_name
      ?.at(0)
      ?.toUpperCase()}`;
  }

  return {
    userData,
    isCompany,
    getUserInitials,
  };
}
