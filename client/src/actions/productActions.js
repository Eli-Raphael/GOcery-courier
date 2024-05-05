import axios from "axios";
export const getAllProducts=()=>dispatch=>{

    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try{
        const response = axios.get('/api/products/getproducts')
        dispatch({type: 'GET_PRODUCTS_SUCCESS', paylpad : response.data})
    }catch (error){
        dispatch({type: 'GET_PRODUCTS_FAILED', paylpad : error})
    }
}