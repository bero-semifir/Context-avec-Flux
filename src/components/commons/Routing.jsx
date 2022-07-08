import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Page1 } from '../../pages/Page1'
import { Page2 } from '../../pages/Page2'

export const Routing = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Redirect exact path="/" to="/page1" />
                <Route path="/page1">
                    <Page1 />
                </Route>
                <Route path="/page2">
                    <Page2 />
                </Route>
            </Switch>
        </Router>
    )
}
