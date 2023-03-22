<template>
  <v-app class="mp ">
    <!-- header start-->
    <header class="">
      <v-card elevation="0">
        <v-toolbar flat>
          <v-toolbar-title>
            <v-img lazy-src="~@/assets/Login_logo.svg" src="~@/assets/indexLogo.svg"></v-img>
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
      <div class="content finish">
        <section class="imgContent ">
          <div class="text">
            <h1>帳戶建立完成</h1>
          </div>
          <div ref="success" class="successImg"></div>
          <p>感謝您使用DoctorMe產品服務， 您的診所預約服務啟用連結已寄送至 使用者的信箱，請至電子信箱收信以啟用服務。</p>
          <p>DoctorMe免費基本版提供診所一位醫生，每個月限額1000筆的門診預約服務，您也可升級帳戶方案享有完整版的DoctorMe智慧醫療服務功能。</p>
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
