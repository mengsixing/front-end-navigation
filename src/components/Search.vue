<template>
	<div class="search">
		<img class="search-image" src="https://unsplash.it/1600/900?random" alt="每日一图">
		<el-input placeholder="请输入内容" v-model="searchText" class="input-with-select" @change="modifyValue" @keyup.enter.native="startSearch">
			<el-select v-model="searchType" slot="prepend" placeholder="请选择">
				<el-option v-for="item in searchOptions" :label="item.label" :value="item.value" :key="item.label">
				</el-option>
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
			oldSearchText: '',
			searchType: 1,
			searchOptions:[
				{
					label: '百度',
					value:1
				},
				{
					label: 'Google',
					value:2
				},{
					label: 'Bing',
					value:3
				}
			],
		};
	},
	methods: {
		startSearch(){
			if(this.oldSearchText !== this.searchText) {
				return;
			}
			switch(this.searchType){
			case 1: window.open(`https://www.baidu.com/s?wd=${this.searchText}`); break;
			case 2: window.open(`https://www.google.com/search?q=${this.searchText}`);break;
			case 3: window.open(`https://cn.bing.com/search?q=${this.searchText}`);break;
			}
		},
		modifyValue(){
			this.oldSearchText = this.searchText;
		}
	}
};
</script>

<style lang="scss">
.search {
  text-align: center;

  .search-image {
    width: 35%;
    margin-bottom: 40px;
  }
}
</style>


