module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: './',
  assetsDir: '',
  devServer: {
    proxy: {
      '/landProxy': {
        // 自訂 local 端的位置
        // target: 'http://localhost:8081/',  // local
        target: 'https://land.hywebcloud20.com:443/', //公司test使用
        changeOrigin: true,
        pathRewrite: {
          '^/landProxy': '',
        },
      },
    },
  },
  // css的處理
  css: {
    // 是否為 CSS 開啟 source map。設定為 true 之後可能會影響構建的效能
    sourceMap: true,
    //向 CSS 相關的 loader 傳遞選項(支援 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      css: {},
      less: {},
    },
  },
};
