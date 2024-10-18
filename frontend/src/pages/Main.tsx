import { WebApp } from "@twa-dev/types";

import { Layout } from "@/components/Layout";

interface Props {
  webApp: WebApp;
}

export function Main({ webApp }: Props) {
  return <Layout webApp={webApp}></Layout>;
}
