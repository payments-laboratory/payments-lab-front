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
        project: "./tsconfig.json",
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
        // 일반 규칙
        "no-use-before-define": "off", // 변수가 정의되기 전에 사용을 허용 여부

        // 리액트 규칙
        "react/button-has-type": "off",
        "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }], // 확장자 설정
        "react/jsx-props-no-spreading": "off",
        "react/no-unescaped-entities": "off",

        // 리액트 훅스 규칙
        "react-hooks/exhaustive-deps": ["warn", { additionalHooks: "useRecoilCallback" }], // hook 에서 의존성 배열 허용 여부, additionalHooks - recoil

        // jsx 규칙 (웹 접근성)
        "jsx-a11y/label-has-for": ["error", { required: { every: ["id"] } }],
        "jsx-a11y/label-has-associated-control": [
            "error",
            { labelComponents: ["label"], labelAttributes: ["htmlFor"], controlComponents: ["input"] },
        ],
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",

        // 타입스크립트 규칙
        "@typescript-eslint/no-use-before-define": [
            "off",
            {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        ],

        // 임포트 규칙
        "import/no-extraneous-dependencies": "off",
        "import/extensions": [
            "warn",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "import/newline-after-import": "warn",
        "import/no-unresolved": "off",
        "import/order": [
            "error",
            {
                groups: ["builtin", "external", "index", "internal", ["parent", "sibling"], "unknown", "type"],
                pathGroups: [
                    {
                        pattern: "{react,react-dom}",
                        group: "builtin",
                        position: "after",
                    },
                    {
                        pattern: "{@components/**,@hooks/**}",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "{@libs/**,@recoil/**,@router/**}",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "{@styles/**,@types/**}",
                        group: "internal",
                        position: "before",
                    },
                    {
                        pattern: "@pages/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "{../**,./*,..,.,./**/*,../../**,../../../**}",
                        group: "index",
                        position: "before",
                    },
                ],
                "newlines-between": "always", // 그룹 간에 최소 한줄이상의 줄바꿈이 강제화, 그룹안에서의 줄바꿈은 금지
                pathGroupsExcludedImportTypes: ["builtin"], // pathGroups 에서 설정에 의해 처리되지 않는 import type 을 정의
                alphabetize: {
                    // 그룹 내 알파벳 기준으로 정렬
                    order: "asc", // 오름차순
                    caseInsensitive: true, // 대소문자 무시
                },
            },
        ],
        "import/prefer-default-export": "off", // export default 권장
    },
};
