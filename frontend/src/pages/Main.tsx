import { WebApp } from "@twa-dev/types";

import { Layout } from "@/components/Layout";
import { useEffect, useState } from "react";

interface Props {
  webApp: WebApp;
}

export function Main({ webApp }: Props) {
  const [posts, setPosts] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(`${import.meta.env.BACKEND_PREFIX}/post/get-all`, {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((posts) => {
        console.log(posts);

        setPosts(posts);
      });
  }, []);

  return <Layout webApp={webApp}></Layout>;
}
