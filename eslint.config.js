import js from '@eslint/js';
import checkFile from 'eslint-plugin-check-file';
import { projectStructurePlugin } from 'eslint-plugin-project-structure';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
   globalIgnores(['dist']),
   {
      files: ['**/*.{ts,tsx}'],
      extends: [
         js.configs.recommended,
         tseslint.configs.recommended,
         reactHooks.configs.flat.recommended,
         reactRefresh.configs.vite,
      ],
      languageOptions: {
         ecmaVersion: 2020,
         globals: globals.browser,
      },
   },
   {
      files: ['**/*.{ts,tsx}'],
      rules: {
         'prefer-arrow-callback': 'error',
         'prefer-template': 'error',
      },
   },
   {
      files: ['**/*.{ts,tsx}'],
      plugins: {
         'check-file': checkFile,
      },
      rules: {
         'check-file/filename-naming-convention': [
            'error',
            {
               '**/*.{ts,tsx}': 'KEBAB_CASE',
            },
            {
               ignoreMiddleExtensions: true,
            },
         ],
         'check-file/folder-naming-convention': [
            'error',
            {
               'src/**': 'KEBAB_CASE',
            },
         ],
      },
   },
   {
      files: ['**/*.{ts,tsx}'],
      plugins: {
         'project-structure': projectStructurePlugin,
      },
      settings: {
         'project-structure/independent-modules-config-path':
            'independentModules.json',
      },
      rules: {
         'project-structure/independent-modules': 'error',
         ...reactHooks.configs.recommended.rules,
      },
   },
]);
