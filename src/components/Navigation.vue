<template>
  <div>
    <el-row>
      <el-col
        class="navigation-github"
        :span="1"
        :offset="23"
        :xs="{span:1,offset:22}"
      >
        <iframe
          src="https://ghbtns.com/github-btn.html?user=mengsixing&repo=front-end-navigation&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="102"
          height="20"
          title="GitHub"
        >
        </iframe>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.navigation-github {
  text-align: right;
}
</style>
