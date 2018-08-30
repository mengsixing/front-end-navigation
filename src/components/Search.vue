<template>
	<div class="search">
		<img class="search-image" src="../assets/qianduandaohang.png" width="320" height="180" alt="每日一图">
		<el-input placeholder="请输入内容" v-model="searchText" @change="modifyValue" class="input-with-select" @keyup.enter.native="startSearch">
			<el-select v-model="searchType" slot="prepend" placeholder="请选择">
				<el-option v-for="item in searchOptions" :label="item.label" :value="item.value" :key="item.label">
				</el-option>
			</el-select>
			<el-button slot="append" icon="el-icon-search" @click="startSearch"></el-button>
		</el-input>
	</div>
</template>

<script>
import {searchOptions} from '~/db/db';
export default {
	data() {
		return {
			searchText: '',
			oldSearchText: '',
			searchType: 0,
			searchOptions,
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
}

.input-with-select {
  .el-select {
    .el-input {
      width: 140px;
    }
  }
}
</style>


