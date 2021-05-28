import React, { Component } from 'react';
import Card from '../../../components/card';
import MainContent from '../../../Layouts/main/index'
import NavBar from '../../../Layouts/navbar/NavBar'
import './style.css'

class AllNotes extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            notes : [
                {   id : 1,
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
                {   id : 2,
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
                {   id : 3,
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
                {   id : 4,
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
            {       id : 5,
                    title :'title',
                    image :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7flKz7FNaNYsIfRuYmfNADqWYJrKTEse--g&usqp=CAU' ,
                    description :'A note is a short document that has to be signed by someone and that gives official information about something' ,

                },
               
            ]
         }
    }

    handledelete = (bookid) => {

        const newnotes = this.state.notes.filter(note => note.id != bookid);
        this.setState({
            notes : newnotes ,
        })
    }


    render() { 
        return ( 
        <div> 
            <NavBar isAuthorized={true} />   
            <MainContent>
                <h1>Notes  </h1>
                <section className=''>
                {
                    this.state.notes.map(note  => (
                    
                    <article  key={note.id}>
                        <Card  image={note.image}  title={note.title} description={note.description}  id={note.id}  handledelete={this.handledelete} />
                    </article>) ) 
                }
                </section>
                
            </MainContent>
        </div> );
    }
}
 
export default AllNotes;