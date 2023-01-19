<template>
  <v-app>
    <v-app-bar>
      <span style="font-family:Microsoft JhengHei;font-size:30px;">通譯人才資料庫X</span>
      <!-- <br />
      <span class="font-weight-light">MATERIAL DESIGN</span>-->

      <v-spacer></v-spacer>
      <div style="font-family:Microsoft JhengHei;">
        <div style="text-align:right;height:25px">
          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2" style="color:grey;font-size:12px;">English</span>
            </v-btn>
          </router-link>
          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2" style="color:grey;font-size:12px;">網站導覽</span>
            </v-btn>
          </router-link>
        </div>
        <div>
          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2">最新消息</span>
            </v-btn>
          </router-link>
          <router-link :to="{name: 'HelloWorld2'}" style="text-decoration:none;">
            <v-btn text>
              <span class="mr-2">通譯須知</span>
            </v-btn>
          </router-link>

          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2">培訓課程</span>
            </v-btn>
          </router-link>

          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2">常見問答</span>
            </v-btn>
          </router-link>

          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2">關於本站</span>
            </v-btn>
          </router-link>

          <router-link
            :to="{name: 'Login'}"
            style="text-decoration:none;"
            v-if="$localStorage.get('userProfileStr') == null"
          >
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2">會員登入</span>
            </v-btn>
          </router-link>
          <router-link
            :to="{name: 'Login'}"
            style="text-decoration:none;"
            v-if="$localStorage.get('userProfileStr') != null"
          >
            <v-btn text href="javascript:void();" target="_blank" @click="logoutObject">
              <span class="mr-2">會員登出</span>
            </v-btn>
          </router-link>
        </div>
        <!-- <div
          style="text-align:right;height:20px"
          v-if="$localStorage.get('userProfileStr') != null"
        >
          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span
                class="mr-2"
                style="color:grey;font-size:25px;"
              >{{JSON.parse(this.$localStorage.get("userProfileStr")).name}}</span>
            </v-btn>
          </router-link>
          <router-link :to="{name: 'HelloWorld'}" style="text-decoration:none;">
            <v-btn text href="javascript:void();" target="_blank">
              <span class="mr-2" style="color:grey;font-size:12px;">網站導覽</span>
            </v-btn>
          </router-link>
 
        </div>-->
      </div>
    </v-app-bar>

    <v-content>
      <!-- <div class="headings">
        <h1>關於本站</h1>
        <h2>關於本站</h2>
      </div>-->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      getUserId: ["getUserId"]
    }),
    userProfile: function() {
      return JSON.parse(this.$localStorage.get("userProfileStr"));
    }
  },
  methods: {
    logoutObject() {
      var vm = this;
      vm.logoutUtil();
    }
  }
};
</script>

