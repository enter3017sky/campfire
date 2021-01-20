import { LOADING } from '../constants/types'
// import products from '../apis/products'


import { products } from '../db.json'

const fakeFetch = () => new Promise((resolve, reject) => {
    resolve({ data: products })
})


export const fetchProducts = () => async dispatch => {
    dispatch({ type: LOADING, payload: true})
    const resData = await fakeFetch().catch(err => 'server is down')

    console.log(resData)
    return { resData, dispatch }
}