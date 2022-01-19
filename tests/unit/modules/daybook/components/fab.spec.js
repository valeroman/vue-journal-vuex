import Fab from '@/modules/daybook/components/Fab'
import { shallowMount } from '@vue/test-utils'
describe('Pruebas en el FAB component', () => {

    test('debe de mostrar el icono por defecto', () => {

        //fab-plus
        const wrapper = shallowMount(Fab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-plus')).toBeTruthy()
    })

    test('debe de mostrar el icono por argumento: fa-circle', () => {

        //fab-circle
        const wrapper = shallowMount(Fab, {
            props: {
                icon: 'fa-circle'
            }
        })
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()
    })

    test('debe de enitir el evento cuando se hace click', () => {

        //wrapper.emitted('on:click)
        const wrapper = shallowMount(Fab)

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)
    })



})