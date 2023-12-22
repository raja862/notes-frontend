import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./update.css"
 
import axios from "axios";



const UpdateNotes=()=>{

const params=useParams();
const navigate=useNavigate();
const notesID=params.notesID.toString();

const [noteDetails, setnoteDetails] = useState({
    title:"",
    subtitle:"",
    contant:"",
});
useEffect(() => {
    axios.get(`https://notes-backend-yycg.onrender.com/notes/${notesID}`).then((response) => {
        setnoteDetails(response.data);
    }).catch(error => {
        console.log('Error: ', error);
    })
}, [notesID]);

const handleInput = (value) => {
    return setnoteDetails(notes => {
        return {...notes, ...value}
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Updating Notes..')
    try{
        const response = await axios.put(`https://notes-backend-yycg.onrender.com/notes/${notesID}`, noteDetails);
        if(response){
            setnoteDetails({
                title:"",
                subtitle:"",
                contant:"",
            });
            navigate('/');
            alert("updated")
        }
    }catch(error){
        console.log('Error: ', error)
    }
}


    return(<div className="updat">

    <h2 className="update">Update Notes </h2>
    < form className="updates" onSubmit={handleSubmit}>

 <div className="form-group">
                    <label htmlFor="name"> Title</label>
                    <input id='name' className="form-control" type='text' value={noteDetails.title} onChange={e => handleInput({title: e.target.value})} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Subtitle</label>
                    <input id='email' className="form-control" type='text' value={noteDetails.subtitle} onChange={e => handleInput({subtitle: e.target.value})}  />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Contant</label>
                    <input id='address' className="form-control" type='text' value={noteDetails.contant} onChange={e => handleInput({contant: e.target.value})} />
                </div>
              
                <div className="form-group">
                    <input className='btn btn-primary mt-2' type='submit' text='Update employee' />
                </div>

    </form>
    
    </div>)
}

export default UpdateNotes;