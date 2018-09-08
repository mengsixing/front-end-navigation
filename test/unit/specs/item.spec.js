import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Item from '~/components/Item.vue';

const wrapper = mount(Item);

describe('Item.vue', () => {
	it('存在Item组件。', () => {
		expect(Item).to.exist;
	});
	it('属性是否正确。', () => {
		expect(wrapper.vm.commonList).to.be.a('Array');
		expect(wrapper.vm.toolList).to.be.a('Array');
		expect(wrapper.vm.blogList).to.be.a('Array');
		expect(wrapper.vm.studyList).to.be.a('Array');
	});
	it('标题是否全部显示。', () => {
		var titleLength = wrapper.findAll('.common-panel-title').length;
		expect(titleLength).to.equal(5);
	});
});
