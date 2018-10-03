import React from 'react';

const Ckeckbox = (props) => {
    return ( 
        <input type='checkbox' onChange={props.onKlik} value={props.checked}  />
     );
}
 
export default Ckeckbox;