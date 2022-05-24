import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue';

describe("test in home", () =>{
    // const wrapp = mount(HomeView);
    it('renders props.msg when passed', () => {
        const wrapper = shallowMount(HomeView, {
          propsData: { }
        })
        expect(wrapper.text()).toMatch('Rick e Morty API')
      })
})