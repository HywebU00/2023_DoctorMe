// src/router.js

import Router from 'vue-router';
import goTo from 'vuetify/es5/services/goto';
import Login from './components/System/Login_';
import Login_changePassword from './components/System/Login_changePassword';
import Login_epaper from './components/System/Login_epaper';
import AppMobile from './components/System/AppMobile.vue';

//wep1
import DashboardWep from './components/System/DashboardWep_';
import index from './components/System/index';

//Clinic
import C01 from './components/Clinic/C01';
import C02 from './components/Clinic/C02';

import C03 from './components/Clinic/C03';
import C04 from './components/Clinic/C04';
import B0301 from './components/Clinic/B0301';
import B0302 from './components/Clinic/B0302';
import B0304 from './components/Clinic/B0304';
import B030402 from './components/Clinic/B030402';
import B0305 from './components/Clinic/B0305';
import B0401 from './components/Clinic/B0401';
import B08 from './components/Clinic/B08';
import B09 from './components/Clinic/B09';

//Line
import L01 from './components/Line/L01';
import L04 from './components/Line/L04';
import L05 from './components/Line/L05';
import L0201 from './components/Line/L0201';

export default new Router({
  // scrollBehavior: (to, from, savedPosition) => {
  //   let scrollTo = 0;

  //   if (to.hash) {
  //     scrollTo = to.hash;
  //   } else if (savedPosition) {
  //     scrollTo = savedPosition.y;
  //   }

  //   return goTo(scrollTo);
  // },
  routes: [
    {
      path: '/',
      // name: 'DashboardWep1',
      component: DashboardWep,
      children: [
        {
          path: '',
          // name: '診所後台',
          component: C01,
        },
        {
          path: '/C01',
          // name: '診所後台',
          component: C01,
        },
        {
          path: '/C02',
          // name: '診所後台',
          component: C02,
        },
        {
          path: '/C03',
          // name: '診所後台',
          component: C03,
        },
        {
          path: '/C04',
          // name: '診所後台',
          component: C04,
        },
        {
          path: '/B08',
          // name: 'Line串接設定',
          component: B08,
        },
        {
          path: '/B09',
          // name: 'Line串接設定',
          component: B09,
        },
        {
          path: '/B0301',
          // name: '門診時間維護',
          component: B0301,
        },
        {
          path: '/B0302',
          // name: '醫生資訊維護',
          component: B0302,
        },
        {
          path: '/B0304',
          // name: '醫生資訊維護',
          component: B0304,
        },
        {
          path: '/B030402',
          // name: '醫生資訊維護',
          component: B030402,
        },
        {
          path: '/B0305',
          // name: '醫生資訊維護',
          component: B0305,
        },
        {
          path: '/B0401',
          // name: '醫生資訊維護',
          component: B0401,
        },
      ],
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Login_changePassword',
      name: 'Login_changePassword',
      component: Login_changePassword,
    },
    {
      path: '/epaper',
      name: 'epaper',
      component: Login_epaper,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/line',
      name: 'mobile',
      component: AppMobile,
      children: [
        {
          path: 'L01',
          component: L01,
        },
        {
          path: 'L0201',
          component: L0201,
        },
        {
          path: 'L04',
          component: L04,
        },
        {
          path: 'L05',
          component: L05,
        },
      ],
    },
  ],
});
