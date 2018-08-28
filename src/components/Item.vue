<template>
	<div>
		<el-row>
			<el-col :span="16" offset="4" class="common-panel">
				<el-row class="common-panel-title">常用网址</el-row>
				<el-row :gutter="20" class="common-panel-container">
					<el-col :span="4" v-for="item in commonList" v-bind:key="item.name" class="common-panel-item">
						<a :href="item.url" target="_blank" class="common-panel-item-a">
							<el-card shadow="always">
								{{item.name}}
							</el-card>
						</a>
					</el-col>
				</el-row>
			</el-col>

		</el-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			commonList:[{
				name:'掘金',
				url:'https://juejin.im',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			},{
				name:'知乎',
				url:'https://www.zhihu.com',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			},{
				name:'Segmentfault',
				url:'https://segmentfault.com',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			},{
				name:'Github',
				url:'https://www.github.com',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			},{
				name:'CNode',
				url:'https://cnodejs.org',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			},{
				name:'V2EX',
				url:'https://www.v2ex.com',
				logo:'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg'
			}],
			list2:[]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.logo {
  height: 30px;
  vertical-align: middle;
}

.common-panel {
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);

  .common-panel-title {
    padding-left: 20px;
    line-height: 40px;
    background-color: #409eff;
    color: white;
  }

  .common-panel-container {
    padding: 20px;

    .common-panel-item {
      margin-bottom: 20px;

      & > a {
        font-size: 14px;
        text-decoration: none;

        .el-card:hover {
          background-color: #409eff;
          color: white;
        }
      }
    }
  }
}
</style>


