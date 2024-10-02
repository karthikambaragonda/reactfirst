import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
        
    }
    function delItems(id) {
        setNotes(prevNotes => {
           return prevNotes.filter((nItem, index) => {
                return index !== id;
            });
        });  
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((nItem, index)=>{ 
                return(
                    <Note key={index} id={index} title={nItem.title} content={nItem.content} Ondelete={delItems} />
                )
                })
            }
    
            <Footer />
        </div>
    );
}

export default App;
