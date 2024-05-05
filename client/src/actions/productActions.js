import axios from "axios"; 
export const getAllProducts=()=>dispatch=>{

    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try{
        const response = axios.get('/api/products/getproducts')
        console.log(response);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data})

    } catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error})
    }

}