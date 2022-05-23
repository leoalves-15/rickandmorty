import HeaderApp from './HeaderApp.vue';

export default {
  title: 'components/HeaderApp',
  component: HeaderApp,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HeaderApp },
  template: '<HeaderApp  v-bind="$props"/>',
});

export const Header = Template.bind({});