const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: [
          {
            provider: "github",
            owner: "ali-mvp",
            private: true,
          },
        ],
        win: {
          target: [
            {
              target: "nsis",
              arch: ["ia32"], // windows 32
            },
          ],
        },
      },
    },
  },
});
