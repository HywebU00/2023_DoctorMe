<template>
  <v-app class="mp ">
    <main>
      <div class="content build">
        <section class="imgContent ">
          <div class="text">
            <h1>帳號與服務已啟用</h1>
          </div>
          <div class="buildFinishImg">
            <v-img lazy-src="~@/assets/mp/img_login_02.png" src="~@/assets/mp/img_login_02.png"></v-img>
          </div>
          <p>
            你所申請的 診所ID 站台服務已啟用，<br />
            登入資訊已寄至
            <span> cat@gmail.com </span> <br />
            請至信箱查看信件以登入服務。 若您未收到信件，<br />請檢查您的垃圾信件匣、廣告信件匣。
          </p>
        </section>
      </div>
      <div class="content build">
        <section class="imgContent ">
          <div class="text">
            <h1>正在為您建置服務中</h1>
          </div>
          <div class="buildFinishImg">
            <v-img lazy-src="~@/assets/mp/mg_login_04.png" src="~@/assets/mp/mg_login_04.png"></v-img>
            <div class="" ref="loading"></div>
          </div>
        </section>
      </div>
    </main>
  </v-app>
</template>

<script>
import lottie from 'lottie-web';

export default {
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.loading,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/loading.json',
    });
  },
};
</script>
<style lang="scss"></style>
