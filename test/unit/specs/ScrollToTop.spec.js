import { expect } from 'chai';
import ScrollToTop from '~/components/ScrollToTop.vue';
import { mount } from '@vue/test-utils';

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
});
