// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
            "@components": path.resolve(__dirname, "src/common/components"),
            "@hooks": path.resolve(__dirname, "src/common/hooks"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@recoil": path.resolve(__dirname, "src/common/recoil"),
            "@router": path.resolve(__dirname, "src/common/router"),
            "@styles": path.resolve(__dirname, "src/common/styles"),
        },
    },
};
