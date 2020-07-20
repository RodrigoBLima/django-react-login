import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Onepage from './containers/Page1/Onepage';
 
export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                     <Route path="/onepage/" component={Onepage} />
                </Switch>                
            </div>
        )
    }
}
