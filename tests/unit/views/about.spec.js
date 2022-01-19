import About from '@/views/About'
import { shallowMount } from '@vue/test-utils'
describe('Pruebas en el About View', () => {

    test('debe de renderizar el componente correctamente ', () => {

        const wrapper = shallowMount(About)
        expect(wrapper.html()).toMatchSnapshot()

    })

})