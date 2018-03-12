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

  // store notes
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

