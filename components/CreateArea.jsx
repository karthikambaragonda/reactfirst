import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";


function CreateArea(props) {
    const [handled, sethandled] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "" 
    });
    function setnote(event) {
        const { name, value } = event.target;
        setNote(prevvItems => {
            return {
                ...prevvItems,
                [name]: value
            };
            
            })
    }
    function submitNote(event) {
        if (note.title.trim() === "" || note.content.trim() === "") {
            return;
        }
        props.onAdd(note);
        setNote({
            title: "",
            content: "" 
        })
        event.preventDefault();
    }

    function handleClick() {
        sethandled(!false);
    }


    return (
        <div>
            
                <form className="create-note">
                {handled &&
                    (<input
                        name="title"
                        value={note.title}
                        onChange={setnote}
                        placeholder="Title"
                    />)}
                <textarea
                    name="content"
                    onClick={handleClick}
                    value={note.content}
                    onChange={setnote}
                    placeholder="Take a note..."
                    rows={handled ? 3 : 1}
                    required />
                <Zoom in={handled}>
                   <Fab onClick={submitNote}><AddIcon /></Fab>
                   </Zoom>
                </form>
        </div>
    );
}

export default CreateArea;