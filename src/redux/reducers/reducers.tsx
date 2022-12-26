const INIT_STATE:any = {
    carts: []
};



 // Add Data From Here

export const cartreducer = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case "ADD_CART":

        const ItemIndex = state.carts.findIndex((item:any)=> item.id === action.payload.id);

        if(ItemIndex >= 0){
            state.carts[ItemIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
        break
           
         // Remove Data From Here

        case "RMV_CART":
            const data = state.carts.filter((el:any)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }
            break

// Remove Individual Data From Here


        case "RMV_ONE":
            const ItemIndex_dec = state.carts.findIndex((item:any)=> item.id === action.payload.id);
   
            if(state.carts[ItemIndex_dec].qnty >= 1){
                const dltitems = state.carts[ItemIndex_dec].qnty -= 1
                console.log([...state.carts,dltitems]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[ItemIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el:any)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }
            break
        default:
            return state
    }
}