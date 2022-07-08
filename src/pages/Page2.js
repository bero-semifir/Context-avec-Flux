import React, { Fragment, useContext, useState } from 'react';
import { UserModel } from "../models/UserModel";
import { UserForm } from '../components/UserForm';
import { StoreContext } from '../components/flux/Store';

export const Page2 = () => {

    const [user, setUser] = useState(new UserModel());
    const { userAction } = useContext(StoreContext);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        userAction.addUser(user);
        setUser(new UserModel());
    }

    return (
        <Fragment>
            <h1>Page 2</h1>
            <UserForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Fragment>
    )
}
