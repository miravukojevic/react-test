import React from 'react';

const Textarea = (props) => {
    return ( 
        <div>
            <textarea
                className="form-input"
                style={{
                    backgroundColor: props.bgColor,
                    color: props.color
                }}
                name={props.nameta}
                rows={props.rows}
                value={props.content}
                onChange={props.onTextArea}
                placeholder={props.placeholder} />
        </div>
    );
}
 
export default Textarea;