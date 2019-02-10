<template>
  <div id="body">
    <el-container>
      <el-header>
        <Navigation />
      </el-header>
      <el-main ref="main">
        <el-row>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 20,offset:2}"
          >
            <Banner />
          </el-col>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 0}"
          >
            <Search />
          </el-col>
        </el-row>
        <div class="white-line"></div>
        <el-row>
          <el-col
            :lg="{span: 16, offset: 4}"
            :md="{span: 18, offset: 3}"
            :sm="{span: 20, offset: 2}"
            :xs="{span: 22, offset: 1}"
          >
            <MainContainer />
          </el-col>
        </el-row>
      </el-main>
      <el-footer height="35px">created by
        <a
          target="_blank"
          href="https://github.com/yhlben"
        >@yhlben</a>
      </el-footer>
    </el-container>
    <scroll-to-top
      v-if="scrollElement"
      :scrollElement="scrollElement"
    />
  </div>
</template>

<script>
import Search from '~/components/Search.vue';
import Banner from '~/components/Banner.vue';
import Navigation from '~/components/Navigation.vue';
import MainContainer from '~/components/Main.vue';
import ScrollToTop from '~/components/ScrollToTop.vue';

export default {
  components: {
    Search,
    Banner,
    MainContainer,
    ScrollToTop,
    Navigation,
  },
  data() {
    return {
      search: '',
      select: '',
      scrollElement: '',
    };
  },
  mounted() {
    this.scrollElement = this.$refs.main.$el;
  },
};
</script>


<style lang="scss">
.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 50px;

  &.el-footer {
    line-height: 35px;
    background-color: #f2f2f2;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #666;
    text-align: right;
    padding-right: 20px;
    font-size: 13px;

    & > a {
      text-decoration: none;
      color: #666;
    }
  }
}

.white-line {
  height: 12px;
}

.el-main {
  position: absolute;
  top: 50px;
  bottom: 35px;
  width: 100%;
}
</style>
