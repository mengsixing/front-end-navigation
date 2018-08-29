<template>
	<div id="body">
		<el-container>
			<el-header>
				<Navigation />
			</el-header>
			<el-main>
				<el-row>
					<el-col :span="16" :offset="4">
						<Search />
					</el-col>
				</el-row>
				<div class="white-line"></div>
				<el-row>
					<Item />
				</el-row>
			</el-main>
			<!-- <el-footer>Written by yhlben</el-footer> -->
		</el-container>
	</div>
</template>

<script>
import Search from '~/components/Search.vue';
import Navigation from '~/components/Navigation.vue';
import Item from '~/components/Item.vue';
export default {
	components:{
		Search,
		Item,
		Navigation
	},
	data() {
		return {
			search: '',
			select: ''
		};
	},
	methods: {}
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
  line-height: 60px;
}

.el-footer {
  background-color: #b3c0d1;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.white-line {
  height: 12px;
}

.el-main {
  position: absolute;
  top: 60px;
  bottom: 60px;
  width: 100%;
}
</style>
