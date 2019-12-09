import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={
            status:"LOADING....",
            count:0
        };
    }
    render(){
        setTimeout(()=>{
            this.setState({status:"Done"});
        },1000);

        setInterval(() => {
            this.setState({count:this.state.count+2})
        }, 1000);

     return(
       <div> 
           <h1 >THIS IS HEADDER</h1>
              <h1>{this.state.status}</h1>
              <h1>{this.state.count}</h1>
             
              <p>{this.props.name}</p>
              <h1>{this.props.surename}</h1>
              <p>{this.props.age}</p>
              <h1 >end of header</h1>
       </div>
   );
    }
 }
 export default Header