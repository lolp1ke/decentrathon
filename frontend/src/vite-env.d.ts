/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV?: "production" | "development";
  readonly VITE_BACKEND_PREFIX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
