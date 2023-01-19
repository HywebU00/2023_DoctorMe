<template>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    // HelloWorldDetail
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      getUserId: ['getUserId'],
      idbServerUrl: ['getIdbServerUrl'],
    }),
    userProfile: function() {
      return JSON.parse(this.$localStorage.get('userProfileStr'));
    },
  },
  created() {
    // console.log("idbServerUrl " + this.idbServerUrl);
    var vm = this;

    // if (vm.$route.path.indexOf("PersonalAdd")==-1 && vm.$route.path.indexOf("OrgAdd")==-1 && !vm.isNotBlankUtil(vm.$localStorage.get("idb_login_token"))) {
    //   swal({
    //     title: "<font face='Microsoft JhengHei'>請重新登入</font>",
    //     html: "<font face='Microsoft JhengHei'>1秒後將自動關閉</font>",

    //     timer: 1000,
    //     showConfirmButton: false,
    //     allowOutsideClick: false,
    //     allowEscapeKey: false,
    //     allowEnterKey: false
    //   });
    //   vm.$router.push({ name: "Login" });
    // }
  },
};
</script>
<style lang="scss">
$color-pack: false;
@import '~@/sass/main.scss';
</style>
