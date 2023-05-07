module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb/hooks",
        "airbnb-typescript",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:import/typescript",
        "plugin:import/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json", // Replace this with the path to your tsconfig.json file
        ecmaVersion: "latest",
        sourceType: "module",
        createDefaultProgram: true,
    },
    plugins: ["prettier", "react", "@typescript-eslint", "react-hooks"],
    settings: {
        "import/resolver": { node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
        "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    },
    rules: {
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", "index", "internal", ["parent", "sibling"], "unknown"],
                pathGroups: [
                    {
                        pattern: "{react,react-dom,react-router-dom}",
                        group: "builtin",
                        position: "after",
                    },
                ],
                pathGroupsExcludedImportTypes: ["builtin"], // pathGroups 에서 설정에 의해 처리되지 않는 import type 을 정의
                alphabetize: {
                    // 그룹 내 알파벳 기준으로 정렬
                    order: "asc", // 오름차순
                    caseInsensitive: true, // 대소문자 무시
                },
                "newlines-between": "always", // 그룹 간에 최소 한줄이상의 줄바꿈이 강제화, 그룹안에서의 줄바꿈은 금지
            },
        ],
    },
};
