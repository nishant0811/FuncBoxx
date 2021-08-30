import React from 'react'

export default function Frame( props ) {
    const srcDoc = props.srcDoc;
    return (
        <div>
            <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                frameBorder="0"
                width="100%"
                height="100%"
            />
        </div>
    )
}
