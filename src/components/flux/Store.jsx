import React, { useReducer } from "react";
import { userReducer } from "./reducers/userReducer";
import { useUserAction } from "./actions/useUserAction";

export const initialState = { users: [] };

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
    // alternative a useState qui utilise un dispatcher
    const [state, dispatch] = useReducer(userReducer, initialState);

    // hook perso pour utiliser les actions de Flux
    const userAction = useUserAction(state, dispatch);

    return (
        <StoreContext.Provider value={{ state, dispatch, userAction }} >
            {children}
        </StoreContext.Provider>
    )

}