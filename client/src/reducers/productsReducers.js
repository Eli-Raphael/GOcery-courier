export const getAllProductsReducer=(state={}, action)=>{

    switch(action.type)
    {
        case 'GET_PRODUCTS_REQUEST': return{
            ...state
        }

        case 'GET_PRODUCTS_SUCCESS': return{
            products : action.payload
       }   

        case 'GET_PRODUCTS_SUCCESS': return{
            error : action.payload
     }   
     default : return state
    }
}