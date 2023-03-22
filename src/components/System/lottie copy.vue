<template>
  <div class="">
    <div class="">測試</div>
    <div ref="discussion" style="width:360px;" class=""></div>
    <div ref="success" style="width:360px;" class=""></div>
    <div ref="workingIdea" style="width:360px;" class=""></div>
  </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  data() {
    return {};
  },

  mounted() {
    lottie.loadAnimation({
      container: this.$refs.discussion,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/discussion.json',
    });

    lottie.loadAnimation({
      container: this.$refs.success,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/success.json',
    });
    lottie.loadAnimation({
      container: this.$refs.workingIdea,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'animations/workingIdea.json',
    });
  },
};
</script>
