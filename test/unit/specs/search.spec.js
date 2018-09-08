import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Search from '~/components/Search.vue';

const wrapper = shallowMount(Search);

describe('Search.vue', () => {
	it('存在Search组件。', () => {
		expect(Search).to.exist;
	});
	it('Searchtype 属性默认值是 0。', () => {
		expect(wrapper.vm.searchType).to.equal(0);
	});

	it('存在每日一图', () => {
		expect(wrapper.find('.search-image').attributes().alt).to.equal('每日一图');
	});
	it('存在 input 输入框。', () => {
		expect(wrapper.find('.input-with-select').exists()).to.equal(true);
	});
});
