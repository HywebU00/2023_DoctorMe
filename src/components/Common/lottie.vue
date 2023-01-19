<template>
  <div :style="style" ref="lavContainer"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },

  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : "100%",
        height: this.height ? `${this.height}px` : "100%",
        overflow: "hidden",
        margin: "0 auto"
      },
      anim: {}
    };
  },

  mounted() {
    this.anim = lottie.loadAnimation(
      {
        container: this.$refs.lavContainer,
        renderer: "svg",
        loop: this.options.loop !== false,
        autoplay: this.options.autoplay !== false,

        animationData: this.options.animationData.default,
        //要变成这个样，才可以正常显示。
        rendererSettings: this.options.rendererSettings
      }
      //直接从github colne他的项目是可以成功渲染的，就是自己的上面的实现不了。。
    );
    this.$emit("animCreated", this.anim);
  }
};
</script>
