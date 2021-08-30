import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Frame from '../Frame/Frame';
import useLocalStorage from '../../hooks/useLocalStorage';
import Navbar from '../Navbar/Navbar';

const MissionMars = () => {
    const [js, setJs] = useLocalStorage('js', '')
    const [srcDoc, setSrcDoc] = useState('')

    function updateCode(){
        setSrcDoc(`
            <html>
            <head>
            <title></title>
            <link rel="stylesheet" href="FuncBoxx/sstyles.css">
            <link rel="stylesheet" href="FuncBoxx/MissionMarsFiles/style.css">
            </head>
            <body>
            <div id="main__body">

            </div>
            <script src="FuncBoxx/MissionMarsFiles/scripts.js"></script>
            <script src="FuncBoxx/scripts.js"></script>
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
            <div className="frame_container">
                    <div className='phone'>
                        <Frame srcDoc={srcDoc}/>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default MissionMars;