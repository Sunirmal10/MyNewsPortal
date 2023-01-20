import React, {useState} from 'react'

function Footer() {
  
const yearDate = new Date().getFullYear();
console.log(yearDate);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '6rem',
      width: '100%',
      borderTop: '0.1rem solid darkgray',
      margin: '0',
      backgroundColor: 'whitesmoke',
      fontSize: '1rem',
      gap: '0.2rem',

    }}>
    
        News Portal {yearDate} <br/>
      <span> Contact: <i class="fa-solid fa-envelope"></i> sunirmald1996@gmail.com</span>
     
   
      
    </div>
  )
}

export default Footer