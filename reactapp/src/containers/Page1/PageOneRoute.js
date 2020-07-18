import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Onepage from './Onepage';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/pageone/" component={Onepage} />
            </Switch>
        )
    }
}

export default withRouter(Routes)