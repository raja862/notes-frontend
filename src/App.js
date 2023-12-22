
import './App.css';
import Header from './Header';
import Footer from './Footer';
import UpdateNotes from './UpdateNotes';
import NotesList from './NotesList';
import AddNotes from './AddNotes';
import Contact from './Contact/Contact';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App(){

  return(<>
  <BrowserRouter>
  
  <Header/>

  <Routes>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/' element={<NotesList/>}/>
  <Route path='/notes/add' element={<AddNotes/>}/>
  <Route path='/notes/:empID/update' element={<UpdateNotes/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  
  
  </>)
}
export default App;
