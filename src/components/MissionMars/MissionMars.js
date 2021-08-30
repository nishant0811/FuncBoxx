import React, { useState } from 'react';
import Editor from '../Editor';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navbar from '../Navbar';

const MissionMars = () => {
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    function updateCode(){
        setSrcDoc(`
            <html>
            <head>
            <title></title>
            <link rel="stylesheet" href="dyteapp/sstyles.css">
            <link rel="stylesheet" href="dyteapp/MissionMarsFiles/style.css">
            </head>
            <body>
            <div id="main__body">

            </div>
            <script src="dyteapp/MissionMarsFiles/scripts.js"></script>
            <script src="dyteapp/scripts.js"></script>
            <script>${js}</script>
            </body>
            </html>
        `)
    }


    return (
    <div>
    <Navbar/>
    <button onClick={updateCode} className="compile-button" >Run</button>
        <div className="top-pane">
            <Editor
                language="javascript"
                displayName="JS"
                value={js}
                onChange={setJs}
            />
            <div class='phone'>
            <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />
            </div>
        </div>
    </div>
    )
}

export default MissionMars;