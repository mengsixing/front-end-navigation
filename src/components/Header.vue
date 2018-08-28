<template>
	<div>
		<el-row align="middle">
			<el-col :span="4">
				<img class="logo" src="../assets/logo.png" alt="前端导航">
			</el-col>
			<el-col :span="4" offset="16">
				<a href="https://www.ele.me" target="_blank">github</a>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: '1'
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.logo {
  height: 30px;
  vertical-align: middle;
}
</style>


