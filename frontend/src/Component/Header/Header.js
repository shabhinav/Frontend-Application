import React from 'react'
import './Header.css'
import Earth from '../../assests/earth.svg'
import Email from '../../assests/email.svg'
import Notification from '../../assests/notifications.svg'


const header=()=>{
    return(
        <div className='header' style={{textAlign:'right'}}>
            <div><h1 style={{color:'#2A7763',fontSize:'35px',margin:'15px'}}>ENER<span style={{color:'#D4A20B'}}>G</span>IE<span style={{border:'2.5px solid #2A7763',color:'#2A7763',fontSize:'19px',padding:'0.5px 1px 0px 1px',verticalAlign:'middle',marginLeft:'5px'}}>LOFT</span></h1></div>
            {/* <div className='navlink' style={{textAlign:'right'}}><img src={Earth}/></div>
            <div className='navlink'><img src={Email}/></div>
            <div className='navlink'><img src={Notification}/></div> */}
            <ul style={{display:'flex',justifyContent: 'flex-end',listStyle:'none'}}>
               <li  ><img style={{verticalAlign:'super',marginRight:'35px'}} src={Earth}/></li>
               <li ><img style={{verticalAlign:'super',marginRight:'35px'}} src={Email}/></li>
               <li ><img style={{verticalAlign:'super',marginRight:'50px'}} src={Notification}/></li> 
            </ul>
            {/* <div style={{textAlign:'right'}}>
                <div style={{textAlign:'right'}}><p style={{textAlign:'right'}}>hello</p></div>
            </div> */}
        </div>
    )
}

export default header