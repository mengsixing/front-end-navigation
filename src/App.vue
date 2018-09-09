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
					<el-col :span="16" :offset="4">
						<Item />
					</el-col>
				</el-row>
			</el-main>
			<el-footer height="35px">created by
				<a target="_blank" href="https://github.com/yhlben">@yhlben</a>
			</el-footer>
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
