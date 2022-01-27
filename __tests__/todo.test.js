import TodoApp from '../src/components/TodoApp.vue';
import { mount } from '@vue/test-utils';


describe('', () => {
  it('', async () => { const wrapper = mount(TodoApp, { props: {} });
    expect(wrapper.get('[data-test="todo"]').text()).toBe('Learn Vue.js 3'); })
  it('', async () => { const wrapper = mount(TodoApp, { props: {} });
    await wrapper.get('[data-test="form"]').trigger('submit');
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2); })
});