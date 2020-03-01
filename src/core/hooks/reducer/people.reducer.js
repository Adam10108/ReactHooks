import { ADD_PERSON } from '../types'

const addPerson = (person, state) => {
  const newPerson = [...state.people, person]
  return {
    ...state,
    people: newPerson
  }
}

export default (state, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return addPerson(action.payload, state)

    default:
      return state
  }
}
