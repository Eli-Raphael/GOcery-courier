<<<<<<< HEAD
import axios from "axios";
=======
import axios from "axios"; 
>>>>>>> parent of edb14e0 (5.5.24)
export const getAllProducts=()=>dispatch=>{

    dispatch({type: 'GET_PRODUCTS_REQUEST'})

    try{
        const response = axios.get('/api/products/getproducts')
<<<<<<< HEAD
        dispatch({type: 'GET_PRODUCTS_SUCCESS', paylpad : response.data})
    }catch (error){
        dispatch({type: 'GET_PRODUCTS_FAILED', paylpad : error})
    }
=======
        console.log(response);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: response.data})

    } catch (error) {
        dispatch({type: 'GET_PRODUCTS_FAILED', payload: error})
    }

>>>>>>> parent of edb14e0 (5.5.24)
}