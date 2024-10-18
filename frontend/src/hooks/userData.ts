import WebApp from "@twa-dev/sdk";
import type { WebAppUser } from "@twa-dev/types";

type useUserDataType = {
  userData: WebAppUser | null;
};

export function useUserData(): useUserDataType {
  let userData: WebAppUser | null = null;
  if (WebApp.initDataUnsafe.user) {
    userData = WebApp.initDataUnsafe.user;
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
