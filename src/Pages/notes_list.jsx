import React, { Component } from 'react';
import MainContent from '../Layouts/main';
import NavBar from '../Layouts/navbar/NavBar';
class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = { 

          }
    }
    render() { 
        return ( 
        <div>
            <NavBar isAuthorized={true} />
            <MainContent>
                <h1>Notes</h1>
            </MainContent>
        </div> );
    }
}
 
export default Notes;