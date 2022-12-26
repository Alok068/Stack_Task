export const ADD = (item:any) => {
    return {
        type: "ADD_CART",
        payload: item
    }  
}

// Remove Items

export const DLT = (id:any) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// Remove Individual Item

export const REMOVE = (item:any) => {
    return {
        type: "RMV_ONE",
        payload: item
    }
}