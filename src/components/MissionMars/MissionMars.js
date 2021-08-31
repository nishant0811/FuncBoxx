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
            <!DOCTYPE html>
            <html>

            <head>
                <title>MarsRover Game</title>
                <link rel="stylesheet" href="./MissionMars.css">
            </head>

            <body>
                <div class="GamePad">
                    <h3 id="score">Start</h3>
                    <div class="grid"></div><br>
                    <button class="movementButton" id="upButton">up</button>
                    <button class="movementButton" id="downButton">down</button>
                    <button class="movementButton" id="leftButton">left</button>
                    <button class="movementButton" id="rightButton">right</button>
                    <button class="Scan movementButton" onclick="ScanObject()" disabled>scan</button>
                    <img src="Rover.svg" alt="roverImg" id="rover" class="roverImg">
                </div>
                <script>${ js }</script>
                <script src='./MissionMars.js'></script>
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