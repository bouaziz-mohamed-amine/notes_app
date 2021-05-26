import React, { Component } from 'react';
import MainContent from '../../../Layouts/main/index'
import NavBar from '../../../Layouts/navbar/NavBar'
import './style.css'

class AllNotes extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            notes : [
                {
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
                {
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'description ' ,

                },
                {
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'description ' ,

                },
               
            ]
         }
    }
    render() { 
        return ( 
        <div> 
            <NavBar isAuthorized={true} />   
            <MainContent>
                <h1>Notes</h1>
                <section>
                {
                    this.state.notes.map(note  => (
                    <article>
                        <img src={note.image} />
                        <h1>{note.title}</h1>
                        <p>{note.description.slice(0,100)} .....</p>
                        <button type="button" >More</button>
                    </article>) ) 
                }
                </section>
            </MainContent>
        </div> );
    }
}
 
export default AllNotes;