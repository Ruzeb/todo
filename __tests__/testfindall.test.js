import TodoApp from '../src/components/TodoApp.vue';
import { mount } from '@vue/test-utils';


describe('', () => {
  it('', async () => {
    const wrapper = mount(TodoApp, { props: {} });
    await wrapper.find('[data-test="form"]').trigger('submit');
    expect(wrapper.findAll('[data-test="todo"]')).
    toHaveLength(2);
  })
});