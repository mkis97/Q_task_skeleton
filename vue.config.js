const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "@/assets/scss/01-settings/_colors.scss";
                    @import "@/assets/scss/01-settings/_fontSizes.scss";
        `,
      },
    },
  },
});
