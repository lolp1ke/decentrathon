import React from "react";

import { WebApp } from "@twa-dev/types";

import { Navbar } from "@/components/Navbar";
import { useTheme } from "@/providers/theme";

interface Props {
  children?: React.ReactNode;
  className?: string;
  webApp: WebApp;
}

export function Layout({ children, className, webApp }: Props) {
  useTheme().setTheme("dark");

  return (
    <main className={"flex flex-1 flex-col gap-2 w-full p-3"}>
      <section className={`flex flex-1 flex-col ${className || ""}`}>
        {children}
      </section>
      <Navbar webApp={webApp} />
    </main>
  );
}
