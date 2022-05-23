import EpisodeCard from './EpisodeCard.vue';

export default {
  title: 'components/EpisodeCard',
  component: EpisodeCard,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { EpisodeCard },
  template: '<EpisodeCard  v-bind="$props"/>',
});

export const Morty = Template.bind({});
Morty.args = {
  id: "1",
  name: "Pilot",
  air_date: "December 2, 2013",
  episode: "S01E01",
  characters: [
    {
     "name": "Rick Sanchez",
     "id": "1"
    },
  ]
};