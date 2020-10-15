import React from 'react'
import './Aside.css'
import Analytics from '../../assests/analytics.svg'
import Home from '../../assests/home.svg'
import Account from '../../assests/loudspeaker.svg'
import News from '../../assests/newspaper.svg'
import Settings from '../../assests/settings.svg'
import Building from '../../assests/buildings.svg'




const aside=()=>{
    return(
        <div>
            <ul className='asidelinks'>
                <li><img src={Home}/>Home</li>
                <li><img src={Account}/>My Account</li>
                <li><img src={Building}/>My Company</li>
                <li><img src={Settings}/>My Settings</li>
                <li><img src={News}/>News</li>
                <li><img src={Analytics}/>Analytics</li>
            </ul>
        </div>
    )
}
export default aside