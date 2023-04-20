<template>
  <v-app class="mp" ref="scrollContent">
    <!-- header start-->
    <header class="">
      <v-card elevation="0">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img src="~@/assets/indexLogo.svg"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <ul>
            <li v-for="i in 3" :key="i" color="primaryDark"><a href=""> 產品介紹</a></li>
            <li><v-btn color="secondary" elevation="0" dark>立即免費試用</v-btn></li>
          </ul>
          <v-dialog v-model="dialogMobile" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn elevation="0" class="mobileBtn" v-bind="attrs" v-on="on" @click="expand = !expand">
                <v-icon class="material-icons-round">
                  menu
                </v-icon>
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
                <div class="">
                  <v-img lazy-src="~@/assets/indexLogo.svg" src="~@/assets/indexLogo.svg"></v-img>
                </div>
                <ul>
                  <li v-for="i in 3" :key="i">
                    <a href="">
                      <v-btn color="accent" block>
                        疫苗注射
                      </v-btn>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <v-btn color="secondary" block>
                        立即免費試用
                      </v-btn>
                    </a>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-dialog>
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
            <div ref="discussion" class="discussionImg"></div>
          </div>
        </section>
        <section class="formContent">
          <v-form class="infoForm">
            <label> <v-icon color="secondary">mdi-numeric-1-circle</v-icon>診所基本資訊</label>
            <div class="formGroup">
              <label for="Name">診所名稱</label>
              <v-text-field placeholder="凌網診所" id="Name" dense background-color="#fff" outlined></v-text-field>
              <label for="id">
                診所ID
                <span>診所 ID 為診所預約網址的一部分，確認後將無法修改或變更</span></label
              >
              <v-text-field placeholder="https://ClinicID.doctorme" id="id" dense background-color="#fff" outlined></v-text-field>
              <label for="phone">診所電話</label>
              <v-text-field placeholder="+886" type="tel" id="phone" dense background-color="#fff" outlined></v-text-field>
            </div>
            <label> <v-icon color="secondary">mdi-numeric-2-circle</v-icon>帳戶登入資訊</label>
            <div class="formGroup">
              <label for="userName">您的姓名</label>
              <v-text-field placeholder="林小凌" id="userName" dense background-color="#fff" outlined></v-text-field>
              <label for="idnum">帳號 <span>您的登入帳號，確認後將無法修改或變更</span></label>
              <v-text-field placeholder="帳號需為6位以上的英文數字組合，大小寫有區別" id="idnum" dense background-color="#fff" outlined></v-text-field>
              <label for="password">密碼</label>
              <v-text-field placeholder="密碼需為6位以上的英文數字組合，大小寫有區別" type="password" id="password" dense background-color="#fff" outlined></v-text-field>
              <label for="mail">Email</label>
              <v-text-field placeholder="doctorme@doctorme.com" type="password" id="mail" dense background-color="#fff" outlined></v-text-field>

              <div class="checkboxInline" for="">
                <v-checkbox id="ok" v-model="checkbox" required></v-checkbox><label for="ok">我同意<a href="">使用者條款</a></label>
              </div>
            </div>
          </v-form>
          <p>※ 診所預約服務帳戶建立後，您將為預設的系統管理員。</p>
          <div class="d-flex">
            <v-spacer></v-spacer>
            <v-btn color="primaryDark" dark>建立帳戶</v-btn>
          </div>
        </section>
      </div>
    </main>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';
//scrollbar
import 'overlayscrollbars/styles/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';

export default {
  data() {
    return {
      expand: false,
      dialogMobile: false,
      checkbox: null,
    };
  },
  methods: {
    scrollBar() {
      const scrollContent = this.$refs.scrollContent.$el;

      OverlayScrollbars(scrollContent, {
        scrollbars: {
          visibility: 'auto',
          autoHide: 'leave',
          autoHideDelay: 500,
        },
      });
    },
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.discussion,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/discussion.json',
    });
    this.scrollBar();
  },
};
</script>
<style lang="scss"></style>
