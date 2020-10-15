import React,{useState,useRef} from 'react'
import './MainInfo.css'
import axios from 'axios'

const Maininfo=()=>{
    const Email = useRef();
    const Password = useRef();    
    const RepeatPassword = useRef();
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [repeatPassword,setrepeatPassword]=useState('')
    const [passcolor,setpassColor]=useState('')
    const [repPasscolor,setrepassColor]=useState('')
    const [submitsuccessfully,setsubmitsuccessfully]=useState(false)



    const onchangeHandler=async(type)=>{
        // console.log(e.target.value)
        if(type==='email'){
           await setEmail(Email.current.value)
        }
        if(type === 'password'){
            await setPassword(Password.current.value)
            if(password.length<5 && password.length>0){
                setpassColor('red')
            }
            if(password.length>=5&&password.length<=7){
                setpassColor('orange')
            }
            if(password.length>7){
                setpassColor('green')
            }
            if(password.length<=1){
                setpassColor('grey')
            }
        }
        if(type==='repeatpassword'){
            await setrepeatPassword(RepeatPassword.current.value)
            if(repeatPassword.length<5 && password.length>0){
                setrepassColor('red')
            }
            if(repeatPassword.length>=5&&password.length<=7){
                setrepassColor('orange')
            }
            if(repeatPassword.length>7){
                setrepassColor('green')
            }
            if(repeatPassword.length<=1){
                setrepassColor('grey')
            }
        }
        


    }

    const onsubmitHandler=()=>{
        console.log('hello')
        if(password !==repeatPassword){
            alert('Incorrect Password')
        }
        else{
            axios.post('https://jsonplaceholder.typicode.com/posts',
            {"email":email,
            "password":password,
            "repeatPassword":repeatPassword})
            setsubmitsuccessfully(true)
        }
    }

    return(
        <div className='MainInfo'>
            {submitsuccessfully?
            <div style={{textAlign:'center'}}>
                <div>
                <h1 >Profile Updated</h1>
                </div>
            </div>:
            <form onSubmit={onsubmitHandler}>
            <div style={{marginTop:'10px'}} >
                <div className='label'><label>Email:</label></div>
                <div className='input'><input ref={Email} type='email' onChange={()=>onchangeHandler('email')} placeholder='Enter Email Id'/></div>
            </div >
            <div style={{marginTop:'10px'}}>
                <div className='label'><label>Password:</label></div>
                <div className='input'>
                     <input style={{border:`${password.length<=1?1:2}px solid ${passcolor}`}} ref={Password} type='password' onChange={()=>onchangeHandler('password')} placeholder='Enter Password'/>
                </div>
            </div>
            <div style={{marginTop:'10px'}}>
                <div className='label' style={{textAlign:'center'}}><label>Repeat Password:</label></div>
                <div className='input'>
                    <input style={{border:`${repeatPassword.length<=1?1:2}px solid ${repPasscolor}`}} ref={RepeatPassword} type='password' onChange={()=>onchangeHandler('repeatpassword')} placeholder='Repeat Password'/>
                </div>
            </div>
            <div style={{marginTop:'10px',paddingRight:'0px'}}>
                <div style={{textAlign:'center'}}> 
                    {email && password && repeatPassword?
                    <button type='submit' 
                    style={{backgroundColor:'blue',cursor:'pointer'}} 
                    >Update</button>
                    :<button disabled 
                    style={{backgroundColor:'grey',cursor:'not-allowed'}} 
                    >Update</button>}
                </div>
            </div>
            </form>}
        </div>
    )
}

export default Maininfo