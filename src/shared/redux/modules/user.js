import { normalize } from 'normalizr'
import { Schemas } from '../schema'
import { updateEntities } from '../entities'

import users from '../../_mock/user'

const FETCH_REQUEST = 'contenthouse/user/FETCH_REQUEST'
const FETCH_SUCCESS = 'contenthouse/user/FETCH_SUCCESS'
const FETCH_FAILURE = 'contenthouse/user/FETCH_FAILURE'

// Initial State
const initialState = {
  creating: false,
  deleting: false,
  errors: [],
  loaded: false,
  loading: false,
  updating: false,
}

// Actions
export function fetchRequest(){
  return {
    type: FETCH_REQUEST,
  }
}

export function fetchSuccess(){
  return {
    type: FETCH_SUCCESS,
  }
}

export function fetchFailure(errors = []){
  return {
    type: FETCH_FAILURE,
    errors,
  }
}


export function loadUsers(options){
  return (dispatch) => {
    dispatch(fetchRequest())

    const promise = new Promise((resolve, reject) => {
      if(users.length){
        const normalizedJson = normalize(users, Schemas.USER_ARRAY)
        dispatch(updateEntities(normalizedJson))
        dispatch(fetchSuccess())
    
        return resolve({ success: true, users })
      }
      return reject(new Error('no data'))
    })
    
    return promise
  }
}

export default function reducer(state = initialState, action = {}){
  switch (action.type){
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        errors: [],
      }
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors: action.errors,
      }
    default:
      return state
  }
}
