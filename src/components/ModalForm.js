import React from 'react';

const ModalForm = (props) => {
    return (<div className={props.className}>
    The selected text is: {props.selected}<br/>
    Checkbox is checked: {JSON.stringify(props.check)}<br/>
    Text area text is: {props.textarea}<br/>
    </div>  );
}
 
export default ModalForm;