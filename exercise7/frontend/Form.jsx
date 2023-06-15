import { useState } from "react"
import { postsStore } from "../backend/api"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Grid } from "@mui/material";

function Form(){
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    function handleSubmit(){
        let newPost = {
            title: title,
            body: body
        }
        postsStore.addPost(newPost)
        setTitle('')
        setBody('')
    }
    return(
        <>
        <Grid container spacing={2} m={2}>
            <Grid item xs={12} sm={6} md={4}>
                <TextField sx={{ width: '100%' }} id="title" label="title" margin="normal" variant="outlined" value={title} onChange={e=>setTitle(e.target.value)}/>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <TextField sx={{ width: '100%' }} id="body" label="body" margin="normal" variant="outlined" value={body} onChange={e=>setBody(e.target.value)}/>
            </Grid>
            <Grid item xs={12} md={4} >
                <Button sx={{ width: '100%', height: '80%'}} onClick={handleSubmit} variant="contained">Add Post</Button>
            </Grid>
        </Grid>
        </>
    )
}

export default Form