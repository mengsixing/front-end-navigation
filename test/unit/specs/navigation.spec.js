import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Navigation from '~/components/Navigation.vue';

const wrapper = mount(Navigation);

describe('Navigation.vue', () => {
	it('存在Navigation组件。', () => {
		expect(Navigation).to.exist;
	});

	it('github链接是否正确。', () => {
		var linkHref = wrapper.find('.github').attributes().href;
		expect(linkHref).to.equal('https://github.com/yhlben/front-end-navigation');
	});
});
