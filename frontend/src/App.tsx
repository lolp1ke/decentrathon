import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

import { ThemeProvider } from "@/providers/theme";

import { Main } from "@/pages/main";
import { Profile } from "@/pages/profile";

import "./index.css";

export default function App() {
  useEffect(() => {
    if (!WebApp) return;
  }, []);

  return (
    <ThemeProvider defaultTheme={"dark"} storageKey={"vite-ui-theme"}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Main webApp={WebApp} />} />
          <Route path={"/profile"} element={<Profile webApp={WebApp} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
