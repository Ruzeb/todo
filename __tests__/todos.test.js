import TodoApp from '../src/components/TodoApp.vue';
import { mount } from '@vue/test-utils';


describe('TodoApp', () => {
  it('add to the todo list', async () => {
    const wrapper = mount(TodoApp, { props: {} });
    await wrapper.find("form").trigger('submit');
    expect(wrapper.findAll("main")).
    toHaveLength(2);
  })
});