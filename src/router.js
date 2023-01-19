// src/router.js

import Router from 'vue-router';
import goTo from 'vuetify/es5/services/goto';


import Login from './components/System/Login';







//wep1
import DashboardWep1 from './components/System/DashboardWep_';



//Clinic
import C01 from './components/Clinic/C01';

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  },
  routes: [
    {
      path: '/',
      name: 'DashboardWep1',
      component: DashboardWep1,

      children: [

        {
          path: '/C01',
          name: '診所後台',
          component: C01,
        },
      ],
    },


    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },



  ],
});
