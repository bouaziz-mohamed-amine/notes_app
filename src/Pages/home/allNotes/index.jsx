import React, { Component } from 'react';
import MainContent from '../../../Layouts/main/index'
import NavBar from '../../../Layouts/navbar/NavBar'

class AllNotes extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            notes : [
                {},
            ]
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
 
export default AllNotes;