import React, { useState } from "react";
import "./Addnot.css"
 import axios from "axios";


const AddNotes=()=>{

 const [ noteDetails , setNoteDetails]=useState({
    title:"",
    subtitle:"",
    contant:"",

    })

const handleInput=(value)=>{
    return setNoteDetails(notes=>{
        return{...notes,...value}
    })
}
const handleSubmit=async(e)=>{
e.preventDefault();

try{
    const response=await axios.post("https://notes-backend-yycg.onrender.com/notes",noteDetails)
if (response){
    setNoteDetails({
     title:"",
    subtitle:"",
    contant:"",
    })
}
}catch(error){
console.log('Error:',error)
}
}
    return(<div >
    
<h1 className="addemp">ADD NOTES</h1>
<form className="form" onSubmit={handleSubmit}> 
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input id='name' className="form-control" type='text' value={noteDetails.title} onChange={e => handleInput({title: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Subtitle</label>
                    <input id='email' className="form-control" type='text' value={noteDetails.subtitle} onChange={e => handleInput({subtitle: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Contant</label>
                    <input id='address' className="form-control" type='text' value={noteDetails.contant} onChange={e => handleInput({contant: e.target.value})} />
                </div>

                <div className='form-group'>
                    <input className='btn btn-primary mt-2' type='submit' value='Add an Notes' />
                </div>
            </form>

    </div>)
}
export default AddNotes
