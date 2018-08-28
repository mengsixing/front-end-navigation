<template>
	<div style="text-align:center;">
		<img style="width:50%; margin-bottom:40px;" src="http://www.pptbz.com/pptpic/UploadFiles_6909/201205/2012051613013604.jpg" alt="banner">
		<el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
			<el-select v-model="searchType" slot="prepend" placeholder="请选择">
				<el-option label="百度" value="1"></el-option>
				<el-option label="Google" value="2"></el-option>
				<el-option label="Bing" value="3"></el-option>
			</el-select>
			<el-button slot="append" icon="el-icon-search" @click="startSearch"></el-button>
		</el-input>
	</div>
</template>

<script>
export default {
	data() {
		return {
			searchText: '',
			searchType: ''
		};
	},
	methods: {
		startSearch(){
			switch(this.searchType){
			case '1': location.href = `https://www.baidu.com/s?wd=${this.searchText}`; break;
			case '2': location.href = `https://www.google.com/search?q=${this.searchText}`;break;
			case '3': location.href = `https://cn.bing.com/search?q=${this.searchText}`;break;
			}
		}
	}
};
</script>

<style lang="scss">
.xxx {
  text-align: center;
}
</style>


