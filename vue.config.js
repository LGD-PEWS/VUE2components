const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: "./",
  productionSourceMap: false,
  css: { extract: false },
});
// module.exports = {
//   css: { extract: false },
// };
