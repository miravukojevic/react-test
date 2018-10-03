import React from 'react';
import Registered from './Regisetered'
import FullName from './FullName'
import Image from './Image'
import About from './About'
import Email from './Email'
import Phone from './Phone'
import Tags from './Tags'
import Select from './Select'


const User = (props) => {
    return ( 
        <div className='mira'>
            <FullName fullname={props.user.name.first +' '+ props.user.name.last}/>
            <Image imagesrc={props.user.picture} />
            <About about={props.user.about} />
            <Email email={props.user.email} />
            <Phone phone={props.user.phone} />
            <Tags tags={props.user.tags}/>
            <Registered isRegistered={props.user.isRegistered} />
        </div>
     );
}
 
export default User;