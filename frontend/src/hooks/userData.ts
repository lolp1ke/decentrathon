// import WebApp from "@twa-dev/sdk";
import type { WebApp, WebAppUser } from "@twa-dev/types";

type TUserData = {
  userData: WebAppUser | null;
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

  return {
    userData,
  };
}
