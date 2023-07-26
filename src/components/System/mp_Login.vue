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
              <h1>免費試用，無期限</h1>
              <p>
                DoctorMe免費提供您的診所基本的智慧預約系統<br />
                立即申請帳戶，輕鬆維繫您與客戶的互動。
              </p>
            </div>
            <div class="applyImg">
              <img src="~@/assets/mp/img_login.png" />
            </div>
          </div>
        </section>
        <section class="formContent">
          <v-form class="infoForm">
            <label>診所基本資訊</label>
            <div class="formGroup">
              <label for="Num">醫事機構代號</label>
              <v-text-field placeholder="請填寫醫事機構代號10碼" id="Nnm" dense></v-text-field>
              <label for="Name">診所名稱</label>
              <v-text-field id="Name" dense></v-text-field>
              <label for="phone">診所電話</label>
              <v-text-field placeholder="+886" type="tel" id="phone" dense></v-text-field>
              <label for="id">
                診所ID
                <span color="primaryDark">* 診所 ID 為診所預約網址的一部分，確認後將無法修改或變更</span></label
              >
              <v-text-field id="id" dense></v-text-field>
            </div>
            <label>帳戶登入資訊</label>
            <div class="formGroup">
              <label for="userName">您的姓名</label>
              <v-text-field id="userName" dense></v-text-field>
              <label for="idnum">帳號 <span>* 6位以上的英文數字組合，大小寫有區別</span></label>
              <v-text-field type="password" id="idnum" dense></v-text-field>
              <label for="password">密碼 <span>* 6位以上的英文數字組合，大小寫有區別</span></label>
              <v-text-field type="password" id="password" dense></v-text-field>
              <label for="mail">Email</label>
              <v-text-field placeholder=" " type="mail" id="mail" dense></v-text-field>
              <label for="mobile">診所電話</label>
              <v-text-field placeholder="+886" type="tel" id="mobile" dense></v-text-field>
              <div class="checkboxInline" for="">
                <v-checkbox id="ok" v-model="checkbox" required></v-checkbox><label for="ok">我同意<a href="">使用者條款</a></label>
              </div>
            </div>
          </v-form>
          <ul>
            <li>※ 診所預約服務帳戶建立後，<span>您將為預設的系統管理員。</span></li>
            <li>※ 請勿冒用他人身份及診所資訊，以免觸法。</li>
          </ul>
          <v-btn class="submitBtn" color="primaryDark" block rounded>建立帳戶</v-btn>
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
