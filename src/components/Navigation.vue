<template>
	<div>
		<el-row>
			<el-col class="navigation-github" :span="1" :offset="23">
				<a class="github" href="https://github.com/yhlben/front-end-navigation" target="_blank">
					<img src="../assets/github.png" alt="github" />
				</a>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	methods: {}
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

    & > img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>




