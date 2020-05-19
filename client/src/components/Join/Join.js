import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join=()=>{
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');


    return( 
        <div className='joinOuterContainer'>
           
            <div className='joinInnerContainer'>
                <h1 className='heading'>Join</h1>
                <div><input type='text' className='joinInput' placeholder='Name' onChange={(e)=>setName(e.target.value)}/></div>
                <div><input type='text' className='joinInput' placeholder='Room' onChange={(e)=>setRoom(e.target.value)}/></div>
                <Link onClick={e=>(!name || !room) ? e.preventDefault() :null} 
                    to={{pathname:'/chat', state:{ name:name,room:room} }}
                >
                    <button type='submit' className='button'>Sign In</button>
                </Link>
            </div>

        </div>
    )
}

export default Join;