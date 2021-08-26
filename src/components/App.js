import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from '../hooks/useLocalStorage'
import space from '../components/spaceship.png'
import Navbar from './Navbar'
function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setSrcDoc(`
//       <html>
//       <head>
//       <title>
//       </title>
//       <link rel="stylesheet" href="dyteapp/sstyles.css">
//       </head>
//       <body>
//       <div id="main__body">
//
//       </div>
//       <script src="dyteapp/scripts.js"></script>
//       <script>${js}</script>
//       </body>
//       </html>
//       `)
// //var hiddenElement = document.getElementById('test1');
// //hiddenElement.href = 'data:attachment/text,' + encodeURI([html]);
// //hiddenElement.target = '_blank';
// //hiddenElement.download = 'index.html';
//
//     }, 250)
//
//     return () => clearTimeout(timeout)
//   }, [js])


  function updateCode(){
    setSrcDoc(`
      <html>
      <head>
      <title>
      </title>
      <link rel="stylesheet" href="dyteapp/sstyles.css">
      </head>
      <body>
      <div id="main__body">

      </div>
      <script src="dyteapp/scripts.js"></script>
      <script>${js}</script>
      </body>
      </html>
    `)
  }
  return (
    <div class="root">
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
export default App;
