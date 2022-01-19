import Entry from '@/modules/daybook/components/Entry'
import { shallowMount } from '@vue/test-utils'
import { journalState } from '../../../mock-data/test-journal-state'

describe('Pruebas en el Entry Component', () => {

    // mockRouter
    const mockRouter = {
        push: jest.fn()
    }

    const wrapper = shallowMount(Entry, {
        props: {
            entry: journalState.entries[0]
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    })


    test('debe de hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de redireccionar al hacer click en el entry-container', () => {

        const entryContainer = wrapper.find('.entry-container')
        entryContainer.trigger('click')

        expect(mockRouter.push).toHaveBeenCalledWith({
            name: 'entry',
            params: {
                id: journalState.entries[0].id
            }
        })
    })

    test('pruebas en la propiedades computadas', () => {

        // wrapper.vm <========== ver las propiedades computadas
        // console.log(wrapper.vm.day)
        // console.log(wrapper.vm.month)
        // console.log(wrapper.vm.yearDay)

        expect(wrapper.vm.day).toBe(9)
        expect(wrapper.vm.month).toBe('Diciembre')
        expect(wrapper.vm.yearDay).toBe('2021, Jueves')
    })



})