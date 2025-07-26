# Slack Clone App

## 📌 概要

このアプリは、React と TypeScript を使用して開発した Slack 風のチャットアプリケーションです。Firebase を用いて認証とリアルタイムなデータ通信を実現しています。ログイン／チャンネルごとのメッセージ管理／ユーザーの状態保持など、チームチャットに必要な基本機能を備えています。

## 🎯 目的

- モダンなフロントエンド開発の実践
- Firebase によるリアルタイム通信・認証の習得
- 型安全を意識したアプリケーション設計の経験

## 🔧 使用技術

- **React (Vite)**
- **TypeScript**
- **Firebase**
  - Authentication（Googleログイン）
  - Firestore（リアルタイムDB）
- **Zustand**（状態管理）
- **React Router**
- **Tailwind CSS**（スタイリング）

## 🛠 主な機能

- Googleアカウントによるログイン／ログアウト
- ワークスペースとチャンネルの切り替え
- チャンネルごとのリアルタイムチャット
- メッセージの送信／表示
- メンバー情報の表示

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
