import createDataContext from './createDataContext'
import axios from 'axios'

const initialState = {
  pages: [],
  page: null,
  pageName: '',
  shareLink: ''
}

const pageReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'GET_PAGES':
      return {
        ...state,
        pages: payload
      }
    case 'GET_PAGE':
      return {
        ...state,
        page: payload
      }
    default:
      return state
  }
}

//get all pages
const getPages = (dispatch) => {
  return async () => {
    try {
      const res = await axios.get(
        'https://rob-test-server.herokuapp.com/api/pages'
      )
      dispatch({
        type: 'GET_PAGES',
        payload: res.data
      })
    } catch (err) {
      console.error(err)
    }
  }
}

//get a page
//Use this when you know how to get data from the dynamic link
const getPage = (dispatch) => {
  return async (id) => {
    try {
      const res = await axios.get(
        `https://rob-test-server.herokuapp.com/api/pages/${id}`
      )
      dispatch({
        type: 'GET_PAGE',
        payload: res.data
      })
    } catch (err) {
      console.error(err)
    }
  }
}

export const { Context, Provider } = createDataContext(
  pageReducer, //reducer
  { getPage, getPages }, //actions
  initialState //initial state
)
