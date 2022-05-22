import CharacterCard from './CharacterCard.vue';

export default {
  title: 'components/CharacterCard',
  component: CharacterCard,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CharacterCard },
  template: '<CharacterCard  v-bind="$props"/>',
});

export const Morty = Template.bind({});
Morty.args = {
  id: 123,
  name: 'Fat Morty',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/123.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/28',
  ],
  url: 'https://rickandmortyapi.com/api/character/123',
};