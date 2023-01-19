module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: './',
  assetsDir: '',
  devServer: {
    proxy: {

      '/landProxy': {                        // 自訂 local 端的位置
        // target: 'http://localhost:8081/',  // local
        target: "https://land.hywebcloud20.com:443/",//公司test使用
        changeOrigin: true,
        pathRewrite: {
          '^/landProxy': ''
        },
      }
    }
  }
}