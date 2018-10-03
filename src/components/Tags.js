import React from 'react';
import Tag from './Tag'

const Tags = (props) => {
   
    
    return (
       
        <div classname="mapTag">{props.tags.map((tag, index) => <Tag key={index} tag={tag} />)}</div>
    )
          
}
 
export default Tags;

