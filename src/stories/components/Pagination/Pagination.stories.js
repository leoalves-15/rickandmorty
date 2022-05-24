import NewPagination from './Pagination.vue';

export default {
  title: 'components/Pagination',
  component: NewPagination,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { NewPagination },
  template: '<NewPagination  v-bind="$props"/>',
});

export const Pagination = Template.bind({});
Pagination.args = {
  allpages: [1,2,3,4, 5, 6, 7, 8, 9],
  currentPage: "1",
};