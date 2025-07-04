// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            '**/tools/**',
            '**/dist/**',
            '**/.idea',
            '**/server/maps',
            '**/client/maps',
        ],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
);