import { AuthTypes } from "../interfaces/AuthInterface";

export interface actionType{
    type: string,
    payload: {
        name: string | null
    }
}

export interface stateType{
    logged: boolean,
    name?: string | null 
}


export const authReducer = (state: stateType, action : actionType) => {

    switch(action.type){
        case AuthTypes.login:
            return {
                ...state,
                logged: true,
                name: action.payload.name
            };
        case AuthTypes.logout:
            return {
                logged: false,
                name: null
            }
        default:
            return state;
    }
}