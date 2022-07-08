import { initialState } from "../Store";

export const userTypes = {
    ADD_USER: "ADD_USER",
    DEL_USER: "DEL_USER"
}

export const userReducer = (state = initialState, action) => {

    /*
        action.type contient le type d'action
        action.payload contient la data sur laquelle effectuer l'action
    */

    switch (action.type) {
        case userTypes.ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }

        case userTypes.DEL_USER:
            let newUser = state.users.filter(usr => usr._id !== action.payload._id);
            return {
                ...state,
                users: [...newUser]
            }


        default:
            break;
    }

}