<template>
  <v-app class="mp ">
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
      <div class="content finish">
        <section class="imgContent ">
          <div class="text">
            <h1>帳戶建立完成</h1>
          </div>
          <p>
            感謝您使用DoctorMe產品服務， <br />
            您的診所預約服務啟用連結已寄送至 使用者的信箱，<br />請至電子信箱收信以啟用服務。
          </p>
          <div ref="success" class="successImg"></div>
          <p>DoctorMe免費基本版提供診所一位醫生，<br />每個月限額1000筆的門診預約服務，<br />您也可升級帳戶方案享有完整版的DoctorMe智慧醫療服務功能。</p>
        </section>
      </div>
    </main>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';

export default {
  data() {
    return {
      expand: false,
      dialogMobile: false,
    };
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$refs.success,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/success.json',
    });
  },
};
</script>
<style lang="scss"></style>
