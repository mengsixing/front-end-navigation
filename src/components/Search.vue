<template>
	<div class="search">
		<img class="search-image" src="http://source.unsplash.com/320x200" width="300" height="175" alt="每日一图">
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
			searchType: 0,
			searchOptions:[
				{
					label: '百度',
					value:0,
					url:'https://www.baidu.com/s?wd='
				},
				{
					label: 'Google',
					value:1,
					url:'https://www.google.com/search?q='
				},{
					label: 'Bing',
					value:2,
					url:'https://cn.bing.com/search?q='
				},{
					label: 'Npmjs',
					value:3,
					url:'https://www.npmjs.com/search?q='
				}
			],
		};
	},
	methods: {
		startSearch(){
			if(this.oldSearchText !== this.searchText) {
				return;
			}
			window.open(this.searchOptions[this.searchType].url + this.searchText);
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


