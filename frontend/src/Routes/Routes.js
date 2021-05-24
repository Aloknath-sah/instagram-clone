import React from 'react';
import Explore from '../Pages/Explore';
import Home from '../Pages/Home';
import {Switch, Route} from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact render={() => <Home/>} />
                <Route path="/explore" exact render={() => <Explore/>} />
            </Switch>
        </div>
    );
}

export default Routes;
