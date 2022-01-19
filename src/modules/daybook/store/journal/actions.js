// Pueden ser acciones asincronas que pueden llamar a una mutacion
// export const myAction = async({ commit }) => {

import journalApi from "../../../../api/journalApi"

// }

export const loadEntries = async({ commit }) => {

    const { data } = await journalApi.get('/entries.json')

    if (!data) {
        commit('setEntries', [])
        return
    }

    // console.log({ data })

    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id] // el valor al que apunta el id
        })
    }
    // console.log(entries)
    commit('setEntries', entries)

}

export const updateEntry = async({ commit }, entry) => {

    // Extraer solo lo que necesita
    const { date, text, picture } = entry
    const dataToSave = { date, text, picture }

    // await journalApi.put(PATH .json, dataToSave)
    await journalApi.put(`/entries/${ entry.id }.json`, dataToSave)

    dataToSave.id = entry.id

    // commit de una mutacion => updateEntry
    commit('updateEntry', {...dataToSave })
}

export const createEntry = async({ commit }, entry) => {

    const { date, text, picture } = entry
    const dataToSave = { date, text, picture }

    const { data } = await journalApi.post('/entries.json', dataToSave)

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}

export const deleteEntry = async({ commit }, id) => {

    await journalApi.delete(`/entries/${ id }.json`)

    commit('deleteEntry', id)

    return id
}