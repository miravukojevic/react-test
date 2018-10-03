import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Registered = (props) => {
    return  props.isRegistered ? <div style={{color:'red', fontSize: '25px', marginRight: '20px'}}><i className="fa fa-circle"></i></div> : <div style={{color:'#00FF00', fontSize: '25px'}}><i className="fa fa-circle"></i></div> ;
}
 
export default Registered;