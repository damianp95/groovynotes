import React from 'react'
import './Home.css'

import MyContainer from '../../components/MyContainer/MyContainer'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={      
        }        
    }
    render(){
        return(
            <div className="home-bod">
                <MyContainer />     
              
                <br/>
            </div>
        )
    }
}

export default Home