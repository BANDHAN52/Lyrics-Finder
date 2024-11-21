import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" || song === "") {
            return;
        }
        Axios.get(
`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        })
    }

    return (
        <div className="App">
            <h1>Lyrics Finder </h1>

            <input className="inp" type="text" 
                placeholder='Artist name'
                onChange={(e) => { setArtist(e.target.value) }} />
            <input className="inp" type="text" 
                placeholder='Song name'
                onChange={(e) => { setSong(e.target.value) }} />
            
            <a href="#" className="my-super-cool-btn" onClick={(e) => {
                e.preventDefault();
                searchLyrics();
            }}>
                <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <span>Go!</span>
            </a>
            
            <hr />
            <pre>{lyrics}</pre>
        </div>
    );
}

export default App;
