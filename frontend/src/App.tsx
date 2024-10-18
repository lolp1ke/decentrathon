import { useEffect } from "react";

import WebApp from "@twa-dev/sdk";
import { useUserData } from "./hooks/userData";

export default function App() {
  useEffect(() => {
    if (!WebApp) return;
  }, []);

  const { userData } = useUserData(WebApp);

  return <p>{userData?.id || 1232}</p>;
}
