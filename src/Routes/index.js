import React from 'react';
import { Route,Switch  } from 'react-router';
import Login from '../Pages/login';
import Notes from '../Pages/notes_list';

const Routes = () => {
    return ( 
        <React.Fragment>
            <Switch>
            <Route exact path='/'><Login/></Route>
            <Route exact path='/notes'><Notes/></Route>
            </Switch>
        </React.Fragment>
     );
}
 
export default Routes;