/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NODE_ENV?: "production" | "development";
  readonly BACKEND_PREFIX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
