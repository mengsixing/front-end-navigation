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
				<el-row class="common-panel-title hotTechnology-panel-title">热门技术</el-row>
				<el-row :gutter="10" class="common-panel-container">
					<el-col :span="4" v-for="item in hotTechnologyList" v-bind:key="item.name" class="common-panel-item">
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
				<el-row class="common-panel-title tool-panel-title">工具大全</el-row>
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
import { commonList,toolList,blogList,studyList,hotTechnologyList} from '~/db/db';
export default {
	data() {
		return {
			commonList,toolList,blogList,studyList,hotTechnologyList
		};
	},
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

    &.hotTechnology-panel-title {
      background-color: #67c23a;
    }

    &.tool-panel-title {
      background-color: #e6a23c;
    }

    &.blog-panel-title {
      background-color: #f56c6c;
    }

    &.study-panel-title {
      background-color: #909399;
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


