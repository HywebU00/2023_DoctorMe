<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo darken-1"
      dark
      style="font-family: Microsoft JhengHei"
    >
      <v-toolbar-title style="width: 50 0px" class="ml-0 pl-0">
        <span class="hidden-sm-and-down" style="font-size: 30px">
          <v-avatar> <v-img src="../../assets/icon-1.jpg" /> </v-avatar>&nbsp;
          <v-avatar> <v-img src="../../assets/icon-2.jpg" /> </v-avatar
          >&nbsp;LABOUR DEPARTMENT
          <span>&nbsp;-&nbsp;{{ $route.name }}</span>
        </span>
        <span class="hidden-sm-and-up" style="font-size: 20px"
          >LABOUR DEPARTMENT</span
        >
        <span class="hidden-sm-and-up" style="font-size: 15px">
          <br />
          {{ $route.name }}
        </span>
      </v-toolbar-title>

      <v-spacer />

      <!-- <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_HgDft2.json"
        background="transparent"
        speed="1"
        style="width: 70px; height: 70px;"
        autoplay
        v-if="autoSaveStatus =='Y'"
        name="autoSaveStatusIcon"
      ></lottie-player>-->
      <div v-if="autoSaveStatus == 'Y'">
        <lottie
          :options="defaultOptions"
          :height="70"
          :width="70"
          v-on:animCreated="handleAnimationUtil()"
        />
      </div>

      <!-- <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-btn icon large target="_blank" v-on="on">
            <v-icon large @click.prevent="logoutObject">mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <span>登出</span>
      </v-tooltip>-->
    </v-app-bar>

    <v-content class="grey lighten-4">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <router-view :key="$route.fullPath"></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>-->
  </v-app>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import Lottie from "../Common/lottie.vue";
import * as animationData from "../../assets/lf20_HgDft2.json";

export default {
  components: { lottie: Lottie },
  computed: {
    ...mapGetters({
      getUserId: ["getUserId"],
      idbServerUrl: ["getIdbServerUrl"],
      autoSaveStatus: ["getAutoSaveStatus"],
    }),
    userProfile: function () {
      return JSON.parse(this.$localStorage.get("userProfileStr"));
    },
    messageStr() {
      return this.isAppIdle ? "ZZZ" : "Hello";
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
      // items: [
      //   { icon: "contacts", text: "找通譯", link: "/HelloWorld" },
      //   { icon: "history", text: "案件管理", link: "/HelloWorld2" },
      //   { icon: "mdi-file-powerpoint", text: "資料管理", link: "/HelloWorld3" },
      //   {
      //     icon: "keyboard_arrow_up",
      //     "icon-alt": "keyboard_arrow_down",
      //     text: "名單管理",
      //     // model: true,
      //     children: [
      //       // { icon: "add", text: "Create 名單" }
      //       { icon: "history", text: "通譯人才名單", link: "/List1" },
      //       { icon: "history", text: "機關人才名單", link: "/List2" }
      //     ]
      //   },

      //   { icon: "settings", text: "個人基本資料" },
      //   { icon: "chat_bubble", text: "帳號管理" },
      //   { icon: "help", text: "通譯人才匯入及匯出" },
      //   { icon: "phonelink", text: "統計報表" }
      // ]
      items: [],
    };
  },
  methods: {
    ...mapActions(["updateAutoSaveStatus"]),

    logoutObject() {
      var vm = this;
      vm.logoutUtil();
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
      // let vm = this;
      // if (!this.isNotBlankUtil(this.$localStorage.get("userProfileStr"))) {
      //   swal({
      //     title: "<font face='Microsoft JhengHei'>請重新登入XXX</font>",
      //     html: "<font face='Microsoft JhengHei'>" + "</font>",
      //     type: "warning",
      //     confirmButtonText: "<font face='Microsoft JhengHei'>確認</font>",
      //     confirmButtonColor: "#f44336"
      //   });
      //   this.logoutObject();
      // }
      // vm.endTime = new Date().getTime() + 30 * 60 * 1000;
      // vm.$localStorage.set("idb_login_token_expire_date", vm.endTime);
    },
  },
  watch: {
    $route: "fetchData",
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
    // var vm = this;
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
  },
  destroyed() {
    clearInterval(this.refreshId);
  },
};
</script>
