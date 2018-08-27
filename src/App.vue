<template>
    <div id="body">
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <button>123123</button>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
	}
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
