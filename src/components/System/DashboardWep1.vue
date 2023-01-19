<template>
  <v-app id="inspire">
    <div class="navTitle">
      <div class="navLogo">
        <h1>
          <img src="~@/assets/Logo.svg" alt="John" />
          <span>DoctorMe</span>
        </h1>
        <v-btn @click.stop="drawer = !drawer" class="mx-2 sidebarBtn " elevation="3" color="secondary" fab>
          <v-icon class="material-icons-round">
            keyboard_backspace
          </v-icon>
        </v-btn>
      </div>
      <!-- user按鈕列表 -->
      <div class="navUser">
        <!-- pc版本user按鈕  start-->
        <div class="userContent">
          <v-btn class="reserveBtn" color=" accent">
            <v-icon class="material-icons-round" color="light" left>add</v-icon>
            <span>新增預約</span>
          </v-btn>
          <v-btn class="userBtn" plain>
            <v-icon class="material-icons-round" left>notifications</v-icon>
            <span>林小華</span>
          </v-btn>
        </div>
        <!-- pc版本user按鈕  end-->
        <!-- mobile版本user按鈕  start-->
        <v-btn class="userBtnMobile" @click="expand = !expand">
          <v-icon class="material-icons-round">
            menu
          </v-icon>
        </v-btn>
        <v-expand-transition>
          <div class="userMobileContent" v-show="expand" height="100" width="100">
            <v-btn class="reserveBtn" color="accent">
              <v-icon class="material-icons-round" color="light" left>add</v-icon>
              <span>新增預約</span>
            </v-btn>
            <v-btn class="userBtn" plain>
              <v-icon class="material-icons-round" left>notifications</v-icon>
              <span>林小華</span>
            </v-btn>
          </div>
        </v-expand-transition>
        <!-- mobile版本user按鈕  end-->
      </div>
      <!-- user按鈕列表 -->
    </div>
    <div class="wrapper">
      <section class="navigation">
        <v-navigation-drawer v-model="drawer" app clipped>
          <v-list>
            <template v-for="item in items">
              <v-list-group v-if="item.children" :key="item.text" v-model="item.model" active-class="primaryDark white--text">
                <template v-slot:activator>
                  <v-icon class="material-icons-round navIcon">{{ item.icon }}</v-icon>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </template>
                <v-list-item v-for="(child, i) in item.children" :key="i" link v-ripple="{ class: `primary--text rounded-list` }" @click="pushObject(child.link)">
                  <v-list-item-action> </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title>
                      <li>{{ child.text }}</li></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group v-else :key="item.link" v-model="item.model" append-icon active-class="primaryDark white--text  rounded-list" @click="pushObject(item.link)">
                <template v-slot:activator>
                  <v-icon class="material-icons-round  navIcon">{{ item.icon }}</v-icon>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </template>
              </v-list-group>
            </template>
          </v-list>
        </v-navigation-drawer>
      </section>
      <section class="main">
        <v-content>
          <router-view></router-view>
        </v-content>
      </section>
    </div>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

// import Lottie from "../Common/lottie.vue";
import * as animationData from '../../assets/lf20_HgDft2.json';

export default {
  // components: { lottie: Lottie },
  computed: {
    ...mapGetters({
      getUserId: ['getUserId'],
      idbServerUrl: ['getIdbServerUrl'],
      autoSaveStatus: ['getAutoSaveStatus'],
      getLangStatus: ['getLangStatus'],
    }),
    userProfile: function() {
      return JSON.parse(this.$localStorage.get('userProfileStr'));
    },
    messageStr() {
      return this.isAppIdle ? 'ZZZ' : 'Hello';
    },
  },
  data() {
    return {
      defaultOptions: { animationData: animationData },

      dialog: false,
      drawer: null,
      startTime: null,
      endTime: null,
      refreshId: null,
      anim: null,
      items: [
        {
          icon: 'assignment',
          text: '預約管理',
          children: [
            // { icon: "add", text: "Create 名單" }
            { icon: 'mdi-circle-small', text: '門診預約', link: '/C01' },
            { icon: 'mdi-circle-small', text: '新冠診療預約', link: '/List2' },
            { icon: 'mdi-circle-small', text: '疫苗注射預約', link: '/List2' },
            { icon: 'mdi-circle-small', text: '疫苗紀錄查詢', link: '/List2' },
          ],
        },
        { icon: 'medical_services', text: '診所資料設定', link: '/T00' },
        {
          icon: 'account_box',
          text: '會員管理',
          link: '/HelloWorld2',
        },
        {
          'icon-alt': 'keyboard_arrow_up',
          // icon: "keyboard_arrow_down",
          icon: 'analytics',
          text: '統計圖表',
          // model: true,
        },

        { icon: 'account_tree', text: '權限角色維護' },
        { icon: 'view_quilt', text: '叫號螢幕設定' },
        // { icon: "help", text: "通譯人才匯入" },
        { icon: 'storage', text: 'Line串接設定' },
        { icon: 'star_rate', text: '帳戶設定' },
      ],
      // items: [],
      initiallyOpen: ['名單管理'],
      files: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-code-json',
        md: 'mdi-language-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel',
      },
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete '],
      ],
      expand: false,
    };
  },
  methods: {
    ...mapActions(['updateAutoSaveStatus']),

    logoutObject() {
      var vm = this;
      vm.logoutWep1Util();
    },
    pushObject(link) {
      var vm = this;

      if (vm.isNotBlankUtil(link)) {
        vm.$router.push({
          path: link,
        });
      }
    },
    fetchData() {
      let vm = this;

      //TEST
      // if (!this.isNotBlankUtil(this.$localStorage.get("userProfileStr"))) {
      //   swal({
      //     title: "<font face='Microsoft JhengHei'>Please login again.</font>",
      //     html: "<font face='Microsoft JhengHei'>" + "</font>",
      //     type: "warning",
      //     confirmButtonText: "<font face='Microsoft JhengHei'>Confirm</font>",
      //     confirmButtonColor: "teal",
      //   });
      //   this.logoutObject();
      // }

      // vm.endTime = new Date().getTime() + 30 * 60 * 1000;
      // vm.$localStorage.set("idb_login_token_expire_date", vm.endTime);
    },
  },
  watch: {
    $route: 'fetchData',
    // isAppIdle: "idleTest"
  },
  mounted() {
    var vm = this;

    //test
    // vm.items = JSON.parse(vm.$localStorage.get("idb_funcIdList"));
    // vm.items = vm.getFakeModel("menu");

    // let recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute(
    //   "src",
    //   "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
    // );
    // document.head.appendChild(recaptchaScript);
  },
  created() {
    var vm = this;
    // vm.endTime = parseInt(vm.$localStorage.get("idb_login_token_expire_date"));
    // vm.startTime = vm.endTime - 30 * 60 * 1000;
    // vm.axios.interceptors.request.use(
    //   function(config) {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     // console.log(config.url);
    //     if (config.url.indexOf("idb/refreshToken") == -1) {
    //       vm.endTime = new Date().getTime() + 30 * 60 * 1000;
    //       vm.$localStorage.set("idb_login_token_expire_date", vm.endTime);
    //     }
    //     return config;
    //   },
    //   function(error) {
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //     return Promise.reject(error);
    //   }
    // );
    // //每5分鐘重取token
    // vm.refreshId = setInterval(this.refreshToken, 5 * 60 * 1000);
    vm.fetchData();
  },
  destroyed() {
    clearInterval(this.refreshId);
  },
};
</script>
<style>
.rounded-list {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
