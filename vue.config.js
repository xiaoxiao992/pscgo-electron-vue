const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: 'html', // 构建输出的目录
  publicPath: './',   // 公共路径，用于配置资源引用的基础路径
  // transpileDependencies: true,
  transpileDependencies: ['@arco-design/web-vue'],
  // 设置别名
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"), // 将 '@' 指向 src 目录
        assets: path.resolve(__dirname, "src/assets"), // 将 'assets' 指向 src/assets 目录
        components: path.resolve(__dirname, "src/components"), // 将 'components' 指向 src/components 目录
        // 可以继续添加更多的别名
      },
    },
  },
  // chainWebpack: (config) => {
  //   // 使用 webpack-chain 来链式操作 webpack 配置
  //   // 配置 Arco Design 插件
  //   config
  //     .plugin("arco-design")
  //     .use(require("@arco-design/web-vue/es/plugin"), [
  //       {
  //         styleLibrary: {
  //           injectStyle: false, // 按需加载样式
  //         },
  //       },
  //     ])
  //     .end();
  // },
  css: {
    // 配置 CSS 相关选项
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 这里可以自定义 Arco Design 的 Less 变量
            "@primary-color": "#1DA57A", // 例如，自定义主题色
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    // 配置 Vue CLI 插件选项
  },
});
