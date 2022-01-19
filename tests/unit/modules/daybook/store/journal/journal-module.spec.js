import journal from '@/modules/daybook/store/journal'
import { createStore } from 'vuex'
import { journalState } from '../../../../mock-data/test-journal-state'


const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState }
            }
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {

    // Basicas ==========================================
    test('este es el estado inicial, debe de tener este state ', () => {

        const store = createVuexStore(journalState)

        const { isLoading, entries } = store.state.journal

        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)

        // console.log(store.state)
    })

    // Mutations ==========================================
    test('mutation: setEntries', () => {
        const store = createVuexStore({ isLoading: true, entries: [] })
        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()
    })

    test('mutation: updateEntry', () => {

        // crear el store con entries
        const store = createVuexStore(journalState)

        // updatedEntry
        const updatedEntry = {
            id: '-MqVi_estC5LAWOvQh7-',
            date: 1639079095950,
            text: 'Hola desde pruebas'
        }

        // commit de la mutacion
        store.commit('journal/updateEntry', updatedEntry)

        const storeEntries = store.state.journal.entries

        // entries.lenght = 2
        expect(storeEntries.length).toBe(2)

        // entries tiene que existir updateEntry toEqual
        expect(
            storeEntries.find(e => e.id === updatedEntry.id)
        ).toEqual(updatedEntry)
    })

    test('mutation: addEntry deleteEntry ', () => {

        const store = createVuexStore(journalState)

        const addEntry = {
            id: 'ABC-123',
            text: 'Hola mundo add'
        }

        store.commit('journal/addEntry', addEntry)

        const storeEntries = store.state.journal.entries

        expect(storeEntries.length).toBe(3)
        expect(storeEntries.find(e => e.id === 'ABC-123')).toBeTruthy()

        store.commit('journal/deleteEntry', 'ABC-123')
        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.entries.find(e => e.id === 'ABC-123')).toBeFalsy()

    })

    // Getters ==========================================
    test('getters: getEntriesByTerm getEntryById', () => {

        const store = createVuexStore(journalState)
        const [entry1, entry2] = journalState.entries

        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('aprendi').length).toBe(1)

        expect(store.getters['journal/getEntriesByTerm']('aprendi')).toEqual([entry2])
        expect(store.getters['journal/getEntryById']('-MqVi_estC5LAWOvQh7-')).toEqual(entry1)

    })

    // Actions ==========================================
    test('actions: loadEntries', async() => {

        const store = createVuexStore({ isLoading: true, entries: [] })

        await store.dispatch('journal/loadEntries')

        expect(store.state.journal.entries.length).toBe(2)
    })

    test('actions: updateEntry ', async() => {
        const store = createVuexStore(journalState)

        const updatedEntry = {
            id: '-MqVi_estC5LAWOvQh7-',
            date: 1639079095950,
            text: 'Hola desde pruebas',
            otroCampo: true,
            otroMas: { a: 1 }
        }

        await store.dispatch('journal/updateEntry', updatedEntry)

        expect(store.state.journal.entries.length).toBe(2)
        expect(
            store.state.journal.entries.find(e => e.id === updatedEntry.id)
        ).toEqual({
            id: '-MqVi_estC5LAWOvQh7-',
            date: 1639079095950,
            text: 'Hola desde pruebas'
        })
    })

    test('actions: createEntry deleteEntry', async() => {

        const store = createVuexStore(journalState)

        const newEntry = { date: 1639079095950, text: 'Nueva entrada desde las pruebas' }

        const id = await store.dispatch('journal/createEntry', newEntry)

        // el ID debe de ser un string
        expect(typeof id).toBe('string')

        // la nueva entrada debe de existir en el state.journal.entries...
        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeTruthy()

        await store.dispatch('journal/deleteEntry', id)

        expect(
            store.state.journal.entries.find(e => e.id === id)
        ).toBeFalsy()
    })


})