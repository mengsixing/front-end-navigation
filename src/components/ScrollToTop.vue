<template>
  <div>
    <section
      id="scroll-to-top"
      class="gotoTop"
      @click="gotoTop()"
      ref="topBtn"
    >
      <i class="el-icon-caret-top"></i>
    </section>
  </div>
</template>

<script>
export default {
  props: ['scrollElement'],
  data() {
    return {
      timer: '',
      scrolling: false,
    };
  },
  mounted() {
    // 平滑滚动
    this.scrollElement.style['scroll-behavior'] = 'smooth';
    this.scrollElement.addEventListener('scroll', this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      const { topBtn } = this.$refs;
      const scrollTop = this.scrollElement.pageYOffset
        || this.scrollElement.scrollTop
        || this.scrollElement.scrollTop;
      const browserHeight = this.scrollElement.offsetHeight - 80;
      if (scrollTop > browserHeight) {
        topBtn.style.visibility = 'visible';
      } else {
        topBtn.style.visibility = 'hidden';
      }
    },
    gotoTop() {
      this.scrollElement.scrollTop = 0;
    },
  },
  beforeDestroy() {
    this.scrollElement.removeEventListener('scroll', this.scrollToTop);
  },
};
</script>

<style lang="scss" scoped>
.gotoTop {
  position: fixed;
  bottom: 80px;
  right: 80px;
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  background-color: #409eff;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
