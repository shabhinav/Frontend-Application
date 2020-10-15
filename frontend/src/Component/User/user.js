import React, {Component } from 'react'
import Maininfo from './Usertabs/Maininfo'
import Additionalinfo from './Usertabs/AdditionalInfo'


class User extends Component{
    state={
        loadComponent:'Main'
    }

        loadComponentHandler=(type)=>{
            this.setState({
                loadComponent:type
            })
        }

    render() {
        return (
            <div>
                <div style={{display:'flex',textAlign:'center',fontSize:'15px'}}>
                    <div style={{width:'50%',
                    cursor:'pointer',
                    padding:'10px 0px',
                    backgroundColor:`${this.state.loadComponent=='Main'?'white':'#D8D8D8'}`}} 
                    onClick={()=>this.loadComponentHandler('Main')}>Main Information</div>

                    <div style={{width:'50%',
                    cursor:'pointer',
                    padding:'10px 0px',
                    backgroundColor:`${this.state.loadComponent=='Add'?'white':'#D8D8D8'}`}} 
                    onClick={()=>this.loadComponentHandler('Add')}>Additional Information</div>
                </div>
                {this.state.loadComponent=='Main'?<Maininfo/>:null}
                {this.state.loadComponent=='Add'?<Additionalinfo/>:null}

            </div>
        )
    }
}

export default User