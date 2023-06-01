// import Vue from 'vue';
// import Vuetify from 'vuetify/lib';

// Vue.use(Vuetify);

// export default new Vuetify({
//   icons: {
//     iconfont: 'mdi',
//   },
// });

// import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// import zhHant from 'vuetify/es5/locale/zh-Hant'

export default new Vuetify({
  icons: {
    iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  theme: {
    themes: {
      light: {
        primary: '#045fa9',
        primaryDark: '#17214C',
        primaryActive: '#d9eeff',
        light: '#fff',
        secondary: '#46B9E7',
        accent: '#17214C',
        error: '#FF5252',
        success: '#67c23a',
        successSecondary: '#00cb9e',
        errorSecondary: '#ff006c',
      },
    },
  },
  // lang: {
  //   locales: { zhHant },
  //   current: 'zhHant',
  // },
});
