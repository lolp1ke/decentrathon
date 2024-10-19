/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV?: "production" | "development";
  readonly VITE_BACKEND_PREFIX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
