// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    webpack: {
        alias: {
            "@components": path.resolve(__dirname, "src/common/components"),
            "@hooks": path.resolve(__dirname, "src/common/hooks"),
            "@libs": path.resolve(__dirname, "src/common/libs"),
            "@recoil": path.resolve(__dirname, "src/common/recoil"),
            "@router": path.resolve(__dirname, "src/common/router"),
            "@styles": path.resolve(__dirname, "src/common/styles"),
            "@types": path.resolve(__dirname, "src/common/types"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@images": path.resolve(__dirname, "public/images"),
        },
    },
};
