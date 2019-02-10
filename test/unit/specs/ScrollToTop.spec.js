import { expect } from 'chai';
import ScrollToTop from '~/components/ScrollToTop.vue';
import { mount } from '@vue/test-utils';
/* eslint-disable no-unused-expressions */

const wrapper = mount(ScrollToTop, {
  propsData: { scrollElement: document.body },
});

describe('ScrollToTop.vue', () => {
  it('存在ScrollToTop组件。', () => {
    expect(ScrollToTop).to.exist;
  });

  it('是否渲染成功', () => {
    expect(wrapper.find('#scroll-to-top')).to.exist;
  });

  it('滚动到顶部', () => {
    wrapper.vm.scrollElement.pageYOffset = 160;
    wrapper.vm.$refs.topBtn.click();
    wrapper.vm.scrollToTop();
  });

  it('隐藏滚动条', () => {
    wrapper.vm.scrollElement.pageYOffset = -80;
    wrapper.vm.scrollToTop();
  });

  it('卸载组件', () => {
    wrapper.destroy();
  });
});
