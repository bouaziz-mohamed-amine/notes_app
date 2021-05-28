import React from "react";



const Card = (props) => {
    return ( 
    <React.Fragment>
    <img src={props.image} />
    <h1>{props.title}  <span>{props.id}</span></h1>
    <p>{props.description.slice(0,100)} .....</p>
    <div>
    <button type="button" class="btn btn-primary">More...</button>
    <button type="button" class="btn btn-success">Edit</button>
    <button type="button" className="btn btn-danger" onClick={()=> props.handledelete(props.id)}>Delete</button>
    </div>    
    </React.Fragment> );
}
 
export default Card;