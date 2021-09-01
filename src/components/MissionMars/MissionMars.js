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
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>MarsRover Game</title>
                <link rel="stylesheet" href="FuncBoxx/MissionMarsFiles/style.css">
            </head>

            <body>
                <div class="GamePad">
                    <h3 id="score" Class="score">Start</h3>
                    <div class="grid"></div><br>
                    <div class="controller-container" id='cc'>
                    <div class="arrow-keys">
                        <img class="movementButton" src='FuncBoxx/MissionMarsFiles/assets/buttons/up.svg' id="upButton"></img>
                        <div class="left-right">
                        <img class="movementButton" src='FuncBoxx/MissionMarsFiles/assets/buttons/left.svg' id="leftButton"></img>
                        <img class="movementButton" src='FuncBoxx/MissionMarsFiles/assets/buttons/right.svg' id="rightButton"></img>
                        </div>
                        <img class="movementButton" src='FuncBoxx/MissionMarsFiles/assets/buttons/down.svg' id="downButton"></img>
                    </div>
                    <button class="Scan" onclick="ScanObject()" disabled>Scan</button>
                </div>

                </div>
                <script>${ js }</script>
                <script src='FuncBoxx/MissionMarsFiles/scripts.js'></script>
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