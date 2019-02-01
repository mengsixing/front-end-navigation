<template>
  <div>
    <block
      :data="commonList"
      type="commonList"
    ></block>
    <block
      :data="hotTechnologyList"
      type="hotTechnologyList"
    ></block>
    <block
      :data="toolList"
      type="toolList"
    ></block>
    <block
      :data="blogList"
      type="blogList"
    ></block>
    <block
      :data="studyList"
      type="studyList"
    ></block>
  </div>
</template>

<script>
import {
  commonList, toolList, blogList, studyList, hotTechnologyList,
} from '~/db/db';
import Block from '~/components/Block.vue';

export default {
  components: { Block },
  data() {
    return {
      commonList,
      toolList,
      blogList,
      studyList,
      hotTechnologyList,
    };
  },
};
</script>
