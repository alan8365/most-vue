import MostTab from './Tab.vue';

export default {
  title: 'MOST/Tab',
  component: MostTab,
  argTypes: {
    backgroundColor: {control: 'color'},
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MostTab},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<most-tab v-bind="args" />',
});

export const Selected = Template.bind({});
Selected.args = {
  selected: true,
  label: '最新消息',
};

export const Normal = Template.bind({});
Normal.args = {
  selected: false,
  label: '會議流程',
};
