import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Main from '~/components/Main.vue';

const wrapper = mount(Main);

describe('Main.vue', () => {
  it('存在Main组件。', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Main).to.exist;
  });
  it('属性是否正确。', () => {
    expect(wrapper.vm.commonList.list).to.be.a('Array');
    expect(wrapper.vm.toolList.list).to.be.a('Array');
    expect(wrapper.vm.blogList.list).to.be.a('Array');
    expect(wrapper.vm.studyList.list).to.be.a('Array');
  });
  it('标题是否全部显示。', () => {
    const titleLength = wrapper.findAll('.common-panel-title').length;
    expect(titleLength).to.equal(5);
  });
});
