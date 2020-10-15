import React,{useState} from 'react'
import './MainInfo.css'

const Maininfo=()=>{

    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [street,setStreet]=useState('')
    const [house,setHouse]=useState('')
    const [pincode,setPincode]=useState('')
    const [country,setCountry]=useState('')
    const [submitsuccessfully,setsubmitsuccessfully]=useState(false)


    const onchangeHandler=async(e,type)=>{
        console.log(e.target.value,type)
        if(type==='fname'){
           await setFname(e.target.value)
        }
        if(type === 'lname'){
            await setLname(e.target.value)
        }
        if(type==='street'){
            await setStreet(e.target.value)
        }
        if(type==='houseno'){
            await setHouse(e.target.value)
        }
        if(type==='pincode'){
            await setPincode(e.target.value)
        }
        if(type==='country'){
            await setCountry(e.target.value)
        }
        
    }

    const onsubmitHandler=()=>{
        setsubmitsuccessfully(true)
    }

    return(
        <div className='MainInfo'>
            {submitsuccessfully?
            <div style={{margin:'auto'}}>
                <div>
                    <h1 >Profile Updated</h1>
                </div>
            </div>:
            <form onSubmit={onsubmitHandler}>
            <div style={{marginTop:'10px'}} >
                <div className='label'><label>FirstName</label></div>
                <div className='input'><input  type='email' onChange={(event)=>onchangeHandler(event,'fname')} placeholder='Enter Firstname'/></div>
            </div >
            <div style={{marginTop:'10px'}}>
                <div className='label'><label>LastName</label></div>
                <div className='input'><input type='text' onChange={(event)=>onchangeHandler(event,'lname')} placeholder='Enter Lastname'/></div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div className='label'><label>Street</label></div>
                <div className='input'><input  type='text' onChange={(event)=>onchangeHandler(event,'street')} placeholder='Street'/></div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div className='label'><label>House No.</label></div>
                <div className='input'><input  type='text' onChange={(event)=>onchangeHandler(event,'houseno')} placeholder='House Number'/></div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div className='label'><label>Postal Code</label></div>
                <div className='input'><input  type='number' onChange={(event)=>onchangeHandler(event,'pincode')} placeholder='Postal Code'/></div>
            </div>
            <div style={{marginTop:'10px '}}>
                <div className='label' ><label>Country</label></div>
                <div className='input'>
                <select style={{padding:'8px'}} onClick={(event)=>onchangeHandler(event,'country')}>
                    <option value='Germany'>Germany</option>
                    <option value='Austria'>Austria</option>
                    <option value='Swizerland'>Swizerland</option>
                </select>
                </div>
                {/* <div className='input'><input  type='text' onChange={(event)=>onchangeHandler(event,'country')} placeholder='Country'/></div> */}
            </div>
            <div style={{marginTop:'10px',marginBottom:'10px'}}>
            <div style={{textAlign:'center'}}> 
                    {fname && lname && street && pincode && house && country ?
                    <button  
                    style={{backgroundColor:'blue'}} 
                    type='submit'>Update</button>
                    :<button disabled 
                    style={{backgroundColor:'grey'}} 
                    >Update</button>}
                </div>
            </div>
        </form>}
        </div>
    )
}

export default Maininfo