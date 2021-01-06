<template>
  <div>
    <el-row>
      <el-col
        class="navigation-github"
        :span="1"
        :offset="23"
        :xs="{span:1,offset:22}"
      >
        <a
          class="github"
          href="https://github.com/mengsixing/front-end-navigation"
          target="_blank"
        >
          <img
            :src="githubImg"
            alt="github"
          />
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import githubImg from '../assets/github.png';

export default {
  data() {
    return {
      githubImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation-github {
  text-align: right;

  .github {
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;

    & :hover {
      opacity: 0.8;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
