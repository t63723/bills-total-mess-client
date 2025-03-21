// Файл: src/vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Добавьте другие переменные окружения, если необходимо
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}