"use client";
import { useEffect, useState } from "react";

import WebApp from "@twa-dev/sdk";
import type { WebAppUser } from "@twa-dev/types";
import { NavBar } from "@/components/nav";
import { useUserData } from "@/hooks/userData";

export default function page() {
  const { userData } = useUserData();

  // const [userData, setUserData] = useState<WebAppUser | null>(null);
  // useEffect(() => {
  //   if (WebApp.initDataUnsafe.user) {
  //     setUserData(WebApp.initDataUnsafe.user);
  //   } else {
  //     setUserData({
  //       id: 314159265,
  //       first_name: "Alibek",
  //       last_name: "Engineer",
  //     });
  //   }
  // }, []);

  return (
    userData && (
      <main className={"flex flex-col flex-1 w-full"}>
        <section className={"flex flex-col flex-1"}>Main block</section>
        <NavBar userData={userData} />
      </main>
    )
  );
}
