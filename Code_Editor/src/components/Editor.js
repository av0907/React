import React,{useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/mode/xml/xml'
import {Controlled as ControlledEditor} from'react-codemirror2'

export default function Editor({ language, displayName, value, onChange }) {
    
    function handleChange(editor, data, value) {
        onChange(value);
    }

    const [open, setOpen]=useState(true);


  return (
    <div className={`editor-container ${open ? `` : `collapse`}`}>
        <div className="editor-title">
            {displayName}
            <button onClick={()=>setOpen(prevOpen => !prevOpen)}>-</button>
        </div>
        <ControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                linewrapping: true,
                lint:true,
                mode: language,
                theme:'material',
                lineNumbers:true
            }}
        />
      
    </div>
  )
}
