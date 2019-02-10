import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Banner from '~/components/Banner.vue';

const wrapper = shallowMount(Banner);

describe('Banner.vue', () => {
  it('存在Banner组件。', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(Banner).to.exist;
  });

  it('存在banner图片。', () => {
    expect(wrapper.find('.banner-image').exists());
  });
});
