import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import "./Notes.css"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





const NotesList=()=>{


const [note , setNote]=useState([]);

useEffect(()=>{
    getNotess();
},[]);

const getNotess = async () => {
    try{
        const response = await axios.get(`https://notes-backend-yycg.onrender.com/notes`);
        setNote(response.data);
    }catch(error){
        console.log('Error: ', error);
    }
}

const handleDelete = async (notesID) => {
    try{
        const response = await axios.delete(`https://notes-backend-yycg.onrender.com/notes/${notesID}`);
        if(response){
            getNotess();
        }
    }catch(error){
        console.log(error);
    }
}

    return(
    
    
        <div className="noteslist">
        
        
    <h1  className="noteslist"> NRK NOTES</h1>   
     
    
    
    <div className="flex-container">
           
    
        {note.length && note.map((getnotes, index)=>(
    
     <Card style={{ width: '30rem',borderRadius:'25% 10%'}} key={index} > 
          <Card.Body>
            <h4>Title:  {getnotes.title}</h4>
            <h6>Subtitle:  {getnotes.subtitle}</h6>
            <p>
              {getnotes.contant}
            </p>
          <Button variant="success" size="sm"> <Link className="link" to={`/notes/${getnotes._id}/update`}>UPDATE</Link> </Button> &&
            <Button variant="danger"  size="sm" onClick={() => handleDelete(getnotes._id)}>DELETE</Button>
          </Card.Body>
        </Card>
        ))}
       
        </div>
    
    
    
        </div>)

    }
    export default NotesList;
    
       
























