import { userTypes } from '../reducers/userReducer';
import { UserModel } from '../../../models/UserModel';

export const useUserAction = (state, dispatch) => {

    const addUser = (data) => {
        if (state.users.every(user => user.name !== data.name)) {
            dispatch({ type: userTypes.ADD_USER, payload: Object.assign(new UserModel(), data) })
        } else {
            alert(`Le nom ${data.name} est déja pris !`)
        }
    }

    const delUser = (data) => {
        if (state.users.some(user => user._id === data._id)) {
            dispatch({ type: userTypes.DEL_USER, payload: data });
        } else {
            alert(`L'utilisateur ${data.nom} n'existe pas`);
        }
    }

    return {
        addUser,
        delUser
    }
}