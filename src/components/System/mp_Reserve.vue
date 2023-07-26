<template>
  <v-app class="mp" ref="scrollContent">
    <!-- header start-->
    <header class="">
      <v-card elevation="0">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img class="mpLogo" src="~@/assets/mp/doctorme_logo.svg"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <ul>
            <li color="primaryDark"><a> 首頁</a></li>
            <li color="primaryDark"><a @click="scrollToHref('product')"> 功能介紹</a></li>
            <li color="primaryDark"><a @click="scrollToHref('price')"> 價格方案</a></li>
            <li color="primaryDark"><a @click="scrollToHref('contact')"> 聯絡我們</a></li>
            <li><v-btn class="applyBtn" elevation="0">立即免費試用</v-btn></li>
          </ul>
          <v-btn elevation="0" class="mobileBtn" @click="expand = !expand">
            <v-icon class="material-icons-round">
              menu
            </v-icon>
          </v-btn>
          <v-expand-transition>
            <v-card v-show="expand" class="mobileContenet">
              <ul>
                <li>
                  <a href="">
                    首頁
                  </a>
                </li>
                <li>
                  <a href="">
                    功能介紹
                  </a>
                </li>
                <li>
                  <a href="">
                    價格方案
                  </a>
                </li>
                <li>
                  <a href="">
                    聯絡我們
                  </a>
                </li>
                <li>
                  <v-btn class="applyBtn" elevation="0">立即免費試用</v-btn>
                </li>
              </ul>
            </v-card>
          </v-expand-transition>
        </v-toolbar>
      </v-card>
    </header>
    <!-- header end-->
    <main>
      <div class="content">
        <section class="imgContent">
          <div class="img">
            <div class="text">
              <h1>預約顧問諮詢</h1>
              <p>
                立即預約諮詢，我們將安排專業顧問介紹，<br />
                提供最適合您診所的智慧解決方案。。
              </p>
            </div>
            <div class="applyImg">
              <img src="~@/assets/mp/img_login_03.png" />
            </div>
          </div>
        </section>
        <section class="formContent">
          <v-form class="infoForm">
            <label>我要預約</label>
            <div class="formGroup">
              <label for="Name">您的姓名</label>
              <v-text-field id="Name" dense></v-text-field>
              <label for="mail">Email</label>
              <v-text-field placeholder=" " type="mail" id="mail" dense></v-text-field>
              <label for="phone">診所電話</label>
              <v-text-field placeholder="+886" type="tel" id="phone" dense></v-text-field>
              <label for="id">
                診所名稱
              </label>
              <v-text-field id="id" dense></v-text-field>
              <label for="note">
                需求說明
              </label>
              <v-textarea id="note" outlined placeholder="請填寫需求說明" background-color="#fff" name="input-7-4" value=""></v-textarea>
              <label for="time">希望聯繫時段</label>
              <v-select id="time" :items="items"></v-select>
            </div>
          </v-form>

          <template>
            <div class="text-center">
              <v-dialog v-model="dialog" max-width="400">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="submitBtn" v-bind="attrs" v-on="on" color="primaryDark" block rounded>送出表單</v-btn>
                </template>
                <v-card class="dialogCard">
                  <v-card-title class="d-flex">
                    <v-icon @click="dialog = false">mdi-window-close</v-icon>
                  </v-card-title>
                  <v-card-text>
                    <h3>感謝您的來信</h3>
                    <p>
                      我們已經收到您的諮詢表單 <br />
                      將會立即安排專人與您聯繫
                    </p>
                    <v-btn block class="submitBtn" @click="dialog = false" color="primaryDark" rounded>返回首頁</v-btn>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </div>
          </template>
        </section>
      </div>
      <!-- 消失時增加 className hide  -->
      <v-btn :class="{ hide: scrollPosition }" class="gotoTopBtn" @click="scrollToTop" fab dark fixed right color="#3d3d3d">
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </main>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';
//scrollbar

export default {
  data() {
    return {
      expand: false,
      dialogMobile: false,
      checkbox: null,
      scrollPosition: false,
      items: ['09:00 - 11:00', '13:00 - 15:00', '15:00 - 18:00'],
      dialog: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    getScrollPosition() {
      window.addEventListener('scroll', (e) => {
        let scrollTop = window.scrollY;
        scrollTop >= 120 ? (this.scrollPosition = false) : (this.scrollPosition = true);
      });
    },
    closeMobileMenu() {
      window.addEventListener('resize', () => {
        let viewWidth = this.$refs.scrollContent.$el.clientWidth;
        viewWidth >= 768 ? (this.expand = false) : '';
      });
    },
    scrollToHref(refName) {
      let element = this.$refs[refName];
      let hrefContent = element.offsetTop;
      window.scrollTo({ top: hrefContent, behavior: 'smooth' });
    },
  },
  mounted() {
    this.getScrollPosition();
    this.closeMobileMenu();
    // lottie.loadAnimation({
    //   container: this.$refs.discussion,
    //   renderer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'animations/discussion.json',
    // });
    // this.scrollBar();
  },
};
</script>
<style lang="scss"></style>
