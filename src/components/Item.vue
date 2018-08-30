<template>
	<div>
		<el-row>
			<el-col :span="24" class="common-panel">
				<el-row class="common-panel-title">常用网址</el-row>
				<el-row :gutter="10" class="common-panel-container">
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

		<el-row>
			<el-col :span="24" class="common-panel">
				<el-row class="common-panel-title tool-panel-title">常用工具</el-row>
				<el-row :gutter="10" class="common-panel-container">
					<el-col :span="4" v-for="item in toolList" v-bind:key="item.name" class="common-panel-item">
						<a :href="item.url" target="_blank" class="common-panel-item-a">
							<el-card shadow="always">
								{{item.name}}
							</el-card>
						</a>
					</el-col>
				</el-row>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="24" class="common-panel">
				<el-row class="common-panel-title blog-panel-title">经典博客</el-row>
				<el-row :gutter="10" class="common-panel-container">
					<el-col :span="4" v-for="item in blogList" v-bind:key="item.name" class="common-panel-item">
						<a :href="item.url" target="_blank" class="common-panel-item-a">
							<el-card shadow="always">
								{{item.name}}
							</el-card>
						</a>
					</el-col>
				</el-row>
			</el-col>
		</el-row>

		<el-row>
			<el-col :span="24" class="common-panel">
				<el-row class="common-panel-title study-panel-title">视频学习</el-row>
				<el-row :gutter="10" class="common-panel-container">
					<el-col :span="4" v-for="item in studyList" v-bind:key="item.name" class="common-panel-item">
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
			},{
				name:'知乎',
				url:'https://www.zhihu.com',
			},{
				name:'Github',
				url:'https://www.github.com',
			},{
				name:'CNode',
				url:'https://cnodejs.org',
			},{
				name:'V2EX',
				url:'https://www.v2ex.com',
			},{
				name:'Stackoverflow',
				url:'https://stackoverflow.com/',
			},{
				name:'Segmentfault',
				url:'https://segmentfault.com',
			}],
			toolList:[
				{
					name:'CodePen',
					url:'https://codepen.io/',
				},
				{
					name:'谷歌翻译',
					url:'https://translate.google.cn/',
				},{
					name:'Bejson',
					url:'http://www.bejson.com/'
				}
			],
			blogList:[{
				name:'阮一峰',
				url:'http://www.ruanyifeng.com/blog/'
			},{
				name:'张鑫旭',
				url:'https://www.zhangxinxu.com/wordpress/'
			},{
				name:'大漠',
				url:'https://www.w3cplus.com/'
			}],
			studyList:[{
				name:'腾讯课堂',
				url:'https://ke.qq.com/'
			},{
				name:'慕课网',
				url:'https://www.imooc.com/'
			},{
				name:'极客学院',
				url:'http://www.jikexueyuan.com/'
			},{
				name:'网易云课堂',
				url:'https://study.163.com/'
			},{
				name:'w3cschool',
				url:'https://www.w3cschool.cn/'
			}]
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

.common-panel {
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  .common-panel-title {
    padding-left: 20px;
    line-height: 40px;
    background-color: #409eff;
    color: white;

    &.tool-panel-title {
      background-color: #67c23a;
    }

    &.blog-panel-title {
      background-color: #e6a23c;
    }

    &.study-panel-title {
      background-color: #f56c6c;
    }
  }

  .common-panel-container {
    padding: 20px;

    .common-panel-item {
      margin-bottom: 20px;

      & > a {
        font-size: 14px;
        text-decoration: none;
        text-align: center;

        .el-card:hover {
          background-color: #409eff;
          color: white;
        }
      }
    }
  }
}

.el-card__body {
  padding: 10px !important;
}
</style>


