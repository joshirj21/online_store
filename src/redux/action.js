import axios from "axios";

export const SeedData = content=>{
    return dispatch=> {
        axios.get("API/products.json").then((d)=>{
            dispatch({
                type:'SEED_DATA',
                payload:{
                    content:JSON.parse(JSON.stringify(d)).data.products
                }
            })
        })
        .catch((error)=>{
            dispatch({
                type:'SEED_DATA',
                payload:{
                    content:"Server Error"
                }
            })
        })
    }
}

export const EditCart = (id,qty) =>({
    type:'EDIT_CART',
    payload:{
        id,
        qty
    }
})

export const AddCart = content=>({
    type :'ADD_CART',
    payload:{
        content:content
    }
})

export const RemoveCart = (content)=>({
    type:'DELETE_CART',
    payload:{
        content
    }
})

// export const setFilter = content=>({
//     type:'SET_FILTER',
//     payload:{
//         content
//     }
// })