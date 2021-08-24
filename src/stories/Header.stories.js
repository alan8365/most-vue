import MostHeader from './Header.vue';

export default {
  title: 'MOST/Header',
  component: MostHeader,
  argTypes: {
    onClick: {},
    onChangePage: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MostHeader},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return {args};
  },
  // Then, the spread values can be accessed directly in the template
  template: '<most-header v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  currentPage: '最新消息',
};
