<template>
  <div>
    <el-row>
      <el-col
        :span="24"
        class="common-panel"
      >
        <el-row
          class="common-panel-title"
          :class="titleStyle"
        >{{data.title}}</el-row>
        <el-row
          :gutter="10"
          class="common-panel-container"
        >
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            v-for="item in data.list"
            v-bind:key="item.name"
            class="common-panel-item"
          >
            <a
              :href="item.url"
              target="_blank"
              class="common-panel-item-a"
            >
              <el-card
                shadow="always"
                :class="itemHoverStyle"
              >
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
  props: ['data', 'type'],
  computed: {
    titleStyle() {
      return this.type;
    },
    itemHoverStyle() {
      return `${this.type}-hover`;
    },
  },
};
</script>

<style lang="scss">
@mixin setBackground($value) {
  background-color: $value;
  color: white;
}

.commonList {
  @include setBackground(#409eff);
}

.hotTechnologyList {
  @include setBackground(#67c23a);
}

.toolList {
  @include setBackground(#e6a23c);
}

.blogList {
  @include setBackground(#f56c6c);
}

.studyList {
  @include setBackground(#909399);
}

.commonList-hover:hover {
  @include setBackground(#409eff);
}

.hotTechnologyList-hover:hover {
  @include setBackground(#67c23a);
}

.toolList-hover:hover {
  @include setBackground(#e6a23c);
}

.blogList-hover:hover {
  @include setBackground(#f56c6c);
}

.studyList-hover:hover {
  @include setBackground(#909399);
}

.common-panel {
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  .common-panel-title {
    padding-left: 20px;
    line-height: 40px;
  }

  .common-panel-container {
    padding: 20px;

    .common-panel-item {
      margin-bottom: 20px;

      & > a {
        font-size: 14px;
        text-decoration: none;
        text-align: center;
      }
    }
  }
}

.el-card__body {
  padding: 15px 10px !important;
}
</style>
