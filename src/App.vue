<template>
	<div id="body">
		<el-container>
			<el-header>Header</el-header>
			<el-main>
				<el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
					<el-select v-model="select" slot="prepend" placeholder="请选择">
						<el-option label="餐厅名" value="1"></el-option>
						<el-option label="订单号" value="2"></el-option>
						<el-option label="用户电话" value="3"></el-option>
					</el-select>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-main>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			input5: '1231',
			select: ''
		};
	},
	methods: {}
};
</script>


<style lang="scss">
.xxx {
  flex: 1;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.body {
  background-color: red;
}
</style>
