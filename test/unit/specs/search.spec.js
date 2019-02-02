import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Search from '~/components/Search.vue';

const wrapper = shallowMount(Search);

const input = wrapper.find('.input-with-select');

describe('Search.vue', () => {
  it('存在Search组件。', () => {
    expect(Search).to.exist;
  });

  it('Searchtype 属性默认值是 0。', () => {
    expect(wrapper.vm.searchType).to.equal(0);
  });

  it('存在 input 输入框。', () => {
    expect(input.exists()).to.equal(true);
  });

  it('触发change事件。', () => {
    input.trigger('change');
    expect(wrapper.vm.oldSearchText).to.equal(wrapper.vm.searchText);
  });

  it('触发正常搜索事件。', () => {
    expect(wrapper.vm.startSearch()).to.be.true;
  });

  it('触发非正常搜索事件。', () => {
    wrapper.vm.searchText = 1;
    wrapper.vm.oldSearchText = 2;
    expect(wrapper.vm.startSearch()).to.be.false;
  });
});
