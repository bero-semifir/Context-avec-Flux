import React, { Fragment, useContext } from 'react'
import { UserList } from '../components/UserList';
import { StoreContext } from '../components/flux/Store';

export const Page1 = () => {

    const { state, userAction } = useContext(StoreContext);

    const handleDelete = (user) => {
        userAction.delUser(user);
    }

    return (
        <Fragment>
            <h1>Page 1</h1>
            <UserList data={state.users} handleDelete={handleDelete} />
        </Fragment>
    )
}
