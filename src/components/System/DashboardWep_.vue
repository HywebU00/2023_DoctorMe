<template>
  <v-app id="inspire">
    <div class="wrap">
      <!-- 測試nav -->
      <div class="aside" :class="{ closeMenu: mini }">
        <v-btn icon @click.stop="mini = !mini" class="mx-2 sidebarBtn " elevation="3" color="secondary" fab>
          <v-icon class="material-icons-round" :mini-variant.sync="mini">
            keyboard_backspace
          </v-icon>
        </v-btn>
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
          <v-list-item class="navLogo">
            <v-list-item-avatar class="">
              <v-img src="~@/assets/Logo.svg"></v-img>
            </v-list-item-avatar>
            <v-img src="~@/assets/logo_text.svg"></v-img>
          </v-list-item>
          <v-btn icon @click.stop="mini = !mini" class="mx-2 sidebarBtn  sidebarBtnInTitle" elevation="3" color="secondary" fab>
            <v-icon class="material-icons-round" :mini-variant.sync="mini">
              keyboard_backspace
            </v-icon>
          </v-btn>

          <div class="scrollContent" ref="scrollContent">
            <v-list>
              <template v-for="item in items">
                <v-list-group v-if="item.children" ref="menuHasItem" :key="item.text" v-model="item.model" active-class="primaryDark white--text">
                  <template v-slot:activator>
                    <v-icon class="material-icons-round navIcon">{{ item.icon }}</v-icon>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                  </template>
                  <v-list-item v-for="(child, i) in item.children" :key="i" link v-ripple="{ class: `primary--text rounded-list` }" @click="pushObject(child.link)">
                    <v-list-item-content @click="addActiveStyle($event)">
                      <v-list-item-title>
                        <li>{{ child.text }}</li>
                      </v-list-item-title>
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
          </div>
        </v-navigation-drawer>
      </div>
      <!-- 測試nav -->
      <main ref="main" class="main">
        <div class="navTitle" :class="{ closeMenu: mini }">
          <!-- user按鈕列表 -->
          <div class="navUser">
            <v-list-item class="navLogo mobileTitle">
              <v-btn icon @click.stop="mini = !mini" class="mx-2 mobileSidebarBtn " elevation="3" color="secondary" fab>
                <v-icon class="material-icons-round" :mini-variant.sync="mini">
                  keyboard_backspace
                </v-icon>
              </v-btn>
              <v-list-item-avatar class="">
                <v-img src="~@/assets/Logo.svg"></v-img>
              </v-list-item-avatar>
              <v-img src="~@/assets/logo_text.svg"></v-img>
              <!-- <v-list-item-title class="title">DoctorMe</v-list-item-title> -->
            </v-list-item>
            <!-- pc版本user按鈕 start -->
            <div class="userContent">
              <!-- 新增預約按鈕start -->
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="reserveBtn " color=" accent" v-bind="attrs" v-on="on">
                    <v-icon class="material-icons-round" color="light" left>add</v-icon>
                    <span>新增預約</span>
                  </v-btn>
                </template>
                <v-list class="reserveSelect text-center ">
                  <v-list-item @click="onClick">
                    <v-list-item-title>一般門診</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>新冠診療</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>疫苗注射</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <!-- 新增預約按鈕end -->
              <v-menu bottom left offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="notificationsBtn" plain v-bind="attrs" v-on="on">
                    <v-badge bordered bottom color="error" dot offset-x="8" offset-y="20">
                      <v-icon class=" material-icons-round" left>notifications</v-icon>
                    </v-badge>
                  </v-btn>
                </template>
                <v-card class="notificationsCardList">
                  <v-card-text>
                    <ul>
                      <li>
                        <div class="">
                          <p>未有啟用的門診表，無法提供預約服務。點擊以啟用或新增門診表。</p>
                          <span class="">1小時前</span>
                        </div>
                        <v-icon color="secondary">mdi-circle-medium</v-icon>
                      </li>
                      <li>
                        <div class="">
                          <p>未有啟用的門診表，無法提供預約服務。點擊以啟用或新增門診表。</p>
                          <span class="">1小時前</span>
                        </div>
                        <v-icon color="secondary">mdi-circle-medium</v-icon>
                      </li>
                    </ul>
                  </v-card-text>
                </v-card>
              </v-menu>
              <!-- <v-btn class="userBtn" plain>
                <span>林小華</span>
              </v-btn> -->
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="userBtn" color="#fff" v-bind="attrs" depressed v-on="on">
                    <span>林曉華</span>
                  </v-btn>
                </template>
                <v-list class="text-center ">
                  <v-list-item @click="onClick">
                    <v-list-item-title>個人資料</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="onClick">
                    <v-list-item-title>登出</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <!-- pc版本user按鈕 end  -->
            <!-- mobile版本user按鈕 start -->
            <v-btn class="userBtnMobile" @click="expand = !expand">
              <v-icon class="material-icons-round">
                menu
              </v-icon>
            </v-btn>
            <v-expand-transition>
              <div class="userMobileContent" v-show="expand" height="100" width="100">
                <!-- <v-btn class="reserveBtn" color="accent">
                  <v-icon class="material-icons-round" color="light" left>add</v-icon>
                  <span>新增預約</span>
                </v-btn> -->
                <v-dialog v-model="dialogMobile" fullscreen hide-overlay transition="dialog-bottom-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="reserveBtn " color=" accent" v-bind="attrs" v-on="on">
                      <v-icon class="material-icons-round" color="light" left>add</v-icon>
                      <span>新增預約</span>
                    </v-btn>
                  </template>
                  <v-card class="dialogMobileCard">
                    <v-card-title>
                      <v-spacer></v-spacer>
                      <v-btn icon @click="dialogMobile = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-card-title>
                    <v-card-text>
                      <v-img :aspect-ratio="1 / 1" width="100" lazy-src="~@/assets/Logo.svg" src="~@/assets/Logo.svg"></v-img>
                      <h5 color="primaryDark" text>新增預約</h5>
                      <ul>
                        <li>
                          <v-btn color="accent" block>
                            <span>一般門診</span>
                          </v-btn>
                        </li>
                        <li>
                          <v-btn color="accent" block>
                            <span>新冠診療</span>
                          </v-btn>
                        </li>
                        <li>
                          <v-btn color="accent" block>
                            <span>疫苗注射</span>
                          </v-btn>
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!-- <v-btn class="notificationsBtn" plain>
                  <v-badge bordered bottom color="error" dot offset-x="8" offset-y="20">
                    <v-icon class=" material-icons-round" left>notifications</v-icon>
                  </v-badge>
                </v-btn> -->
                <v-menu bottom left offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn class="notificationsBtn" plain v-bind="attrs" v-on="on">
                      <v-badge bordered bottom color="error" dot offset-x="8" offset-y="20">
                        <v-icon class=" material-icons-round" left>notifications</v-icon>
                      </v-badge>
                    </v-btn>
                  </template>
                  <v-card class="notificationsCardList">
                    <v-card-text>
                      <ul>
                        <li>
                          <div class="">
                            <p>未有啟用的門診表，無法提供預約服務。點擊以啟用或新增門診表。</p>
                            <span class="">1小時前</span>
                          </div>
                          <v-icon color="secondary">mdi-circle-medium</v-icon>
                        </li>
                        <li>
                          <div class="">
                            <p>未有啟用的門診表，無法提供預約服務。點擊以啟用或新增門診表。</p>
                            <span class="">1小時前</span>
                          </div>
                          <v-icon color="secondary">mdi-circle-medium</v-icon>
                        </li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-menu>
                <v-btn class="userBtn" plain>
                  <span>林小華</span>
                </v-btn>
              </div>
            </v-expand-transition>
            <!-- mobile版本user按鈕 end -->
          </div>
          <!-- user按鈕列表 -->
        </div>
        <v-main :class="{ closeMenu: mini }" ref="scrollBar">
          <router-view></router-view>
        </v-main>
        <!-- 消失時增加 className hide  -->
        <v-btn :class="{ hide: scrollPosition }" class="gotoTopBtn" @click="scrollToTop" fab dark fixed right color="secondary">
          <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
      </main>
    </div>
  </v-app>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

// import Lottie from "../Common/lottie.vue";
import * as animationData from '../../assets/lf20_HgDft2.json';

//scrollbar
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

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
      dialogMobile: false,
      notifications: false,
      sound: true,
      widgets: false,
      fab: false,
      items: [
        {
          icon: 'assignment',
          text: '預約管理',
          children: [
            { icon: 'mdi-circle-medium', text: '門診預約', link: '/C01' },
            { icon: 'mdi-circle-medium', text: '新冠診療預約', link: '/C02' },
            { icon: 'mdi-circle-medium', text: '疫苗注射預約', link: '/C03' },
            { icon: 'mdi-circle-medium', text: '疫苗紀錄查詢', link: '/C04' },
          ],
        },
        {
          icon: 'medical_services',
          text: '診所資料設定',
          children: [
            { icon: 'mdi-circle-medium', text: '門診時間維護', link: '/B0301' },
            { icon: 'mdi-circle-medium', text: '醫生資訊維護', link: '/' },
            { icon: 'mdi-circle-medium', text: '診所資訊維護', link: '/' },
            { icon: 'mdi-circle-medium', text: '門診表', link: '/' },
            { icon: 'mdi-circle-medium', text: '預約維護', link: '/' },
          ],
        },
        {
          icon: 'account_box',
          text: '會員管理',
          link: '/HelloWorld2',
        },
        {
          'icon-alt': 'keyboard_arrow_up',
          icon: 'analytics',
          text: '統計圖表',
        },

        { icon: 'account_tree', text: '權限角色維護' },
        { icon: 'view_quilt', text: '叫號螢幕設定' },
        { icon: 'storage', text: 'Line串接設定', link: '/B08' },
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
      mini: false,
      scrollPosition: true,
    };
  },
  methods: {
    ...mapActions(['updateAutoSaveStatus']),
    onClick() {},
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
    },
    scrollToTop() {
      const osInstance = OverlayScrollbars(this.$refs.scrollBar.$el);
      const { viewport } = osInstance.elements();
      viewport.scrollTo({ top: 0, behavior: 'smooth' }); // set scroll offset
    },
    getScrollPosition() {
      const osInstance = OverlayScrollbars(this.$refs.scrollBar.$el);
      const { viewport } = osInstance.elements();
      viewport.addEventListener('scroll', () => {
        const { scrollTop } = viewport; // get scroll offset
        scrollTop >= 120 ? (this.scrollPosition = false) : (this.scrollPosition = true);
      });
    },
    scrollBar() {
      const scrollBar = this.$refs.scrollBar.$el;
      OverlayScrollbars(scrollBar, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
      });
      const scrollContent = this.$refs.scrollContent;
      OverlayScrollbars(scrollContent, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
      });
    },
    addActiveStyle(targetItem) {
      let targetDom = targetItem.target;
      let menuHasItem = this.$refs.menuHasItem;
      function removeClass(list) {
        list.forEach((item) => {
          item.classList.remove('active');
        });
      }
      menuHasItem.forEach((item) => {
        let list = item.$el.querySelectorAll('li');
        removeClass(list);
      });
      targetDom.classList.add('active');
    },
  },
  watch: {
    $route: 'fetchData',
    // isAppIdle: "idleTest"
  },
  mounted() {
    var vm = this;
    this.scrollBar();
    this.getScrollPosition();
  },
  created() {
    var vm = this;
    vm.fetchData();
  },
  destroyed() {
    clearInterval(this.refreshId);
  },
  updated() {},
};
</script>
<style>
/* .rounded-list {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
} */
</style>
