const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: { extract: false },
});
// module.exports = {
//   css: { extract: false },
// };
