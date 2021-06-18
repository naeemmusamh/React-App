import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from '../Form/Form.js'
import  History  from "../History/History.js";
import Help from '../Help/Help.js';

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Form/>
                </Route>
                <Route exact path="/History">
                    <History/>
                </Route>
                <Route exact path="/Help">
                    <Help/>
                </Route>
            </Switch>
        </main>
    )
}

export default Main;