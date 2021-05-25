import React from 'react';
import { Route,Switch  } from 'react-router';
import Login from '../Pages/login/login';
import Notes from '../Pages/notes_list';
import AllNotes from '../Pages/home/allNotes/index'


const Routes = () => {
    return ( 
        <React.Fragment>
            <Switch>
            <Route exact path='/'><Login/></Route>
            <Route exact path='/notessss'><Notes/></Route>
            <Route  exact path='/notes'  component={AllNotes} />
            </Switch>
        </React.Fragment>
     );
}
 
export default Routes;