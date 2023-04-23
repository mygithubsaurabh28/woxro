import React, { useState } from 'react';
import './Chat.css';

function Chat() {
    const [show,setShow]=useState(true);
  return (
    <>
    <div className='box1'>
        {
           show?<div className='chat'></div>:null
        }
      
    </div>
    <button type='button' className='bt'>Chat With Us</button>
    </>
  )
}

export default Chat


