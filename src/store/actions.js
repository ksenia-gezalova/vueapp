import * as mutations from './mutations-type'

export const saveNote = ({ commit, dispatch, state }) => {
  // touch last saved timestamp
  commit(mutations.TOUCH_LAST_SAVED)

  if (state.note.id === null) {
    // set current node id
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now())
    // prepend to notes
    commit(mutations.PREPEND_TO_NOTES, state.note)
  }
  dispatch('storeNotes')
}

// store notes

export const storeNotes = ({ state }) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const openNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note)
}

export const deleteNote = ({ commit, dispatch, state }, id) => {
  if (id === state.note.id) {
    dispatch('clearCurrentNote')
  }

  commit(mutations.DELETE_NOTE, id)

  dispatch('storeNotes')
}

export const startSaveTimeout = ({ commit, dispatch, state }) => {
  if (state.saveTimeout !== null) {
    return
  }
  // set save timeout 1000ms
  commit(mutations.SET_SAVE_TIMEOUT, {
    callback () {
      dispatch('saveNote')
      dispatch('stopSaveTimeout')
    },
    delay: 1000
  })
}

export const stopSaveTimeout = ({ commit, dispatch, state }) => {
  commit(mutations.CLEAR_SAVE_TIMEOUT)
}

export const clearCurrentNote = ({ commit, dispatch }) => {
  dispatch('stopSaveTimeout')
  commit(mutations.SET_CURRENT_NOTE, null)
}
