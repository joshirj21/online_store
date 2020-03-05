import axios from "axios";
let data = [];

axios.get("API/products.json")
.then((d) => data = [...JSON.parse(JSON.stringify(d)).data.products])
.catch((e)=> {console.log(e); return data = []})

const initialStates = {
    products:[...data],
    cart:[],
    like:[]
}


export default function(state=initialStates,action){
    switch(action.type){
        case 'SEED_DATA':
            return {
                ...state,
                products:[...state.products,...action.payload.content]
            }
        case 'ADD_CART':
            return {
                ...state,
                cart:[...state.cart,{id:action.payload.content,qty:1}]
            }
        case 'EDIT_CART':
            return {
                ...state,
                cart:[...state.cart.map(v=>v.id === action.payload.id ? {...v,qty:action.payload.qty}: {...v})]
            }
        case 'DELETE_CART':
            let cartCopy = [...state.cart]
            cartCopy.splice([cartCopy.findIndex(el=>el.id === action.payload.content)],1);      //made a copy of it first because it returns removed element
            return {
                ...state,
                cart:[...cartCopy]
            }
        default:
            return state;
    }
}