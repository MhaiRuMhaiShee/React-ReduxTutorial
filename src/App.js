import React, { Component } from 'react';
import Header from './Header';
import User from './User';
import {connect} from 'react-redux';

const mapStatetoProps=(state)=>{
  return{
    user:state.user,
    emp:state.emp
  }
}

const mapDispatchtoProps=(dispatch)=>{
  return{
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload:name
      });
    },
    setSalary:(num)=>{
      dispatch({
        type:"ADD",
        payload:num
      });
    }
  };
}

class App extends Component {
  constructor(){
    super();

    this.state={
      data:[],
      status:"Unlike",
      count:0,
      message:""
    }

    this.onStatusChange=this.onStatusChange.bind(this);
    this.onCountChange=this.onCountChange.bind(this);
    this.onDataChange=this.onDataChange.bind(this);
    this.onMessageChange=this.onMessageChange.bind(this);
  }

  onStatusChange(){
    this.setState({status:"Liked"});
    this.props.setSalary(1001)
  }
  onCountChange(){
    this.setState({count:this.state.count+1});
  }
  onDataChange(){
    var item="Data";
    var myArr = this.state.data;
    myArr.push(item);
    this.setState({data:myArr})
  }
  onMessageChange(event){
    this.setState({message:event.target.value})
  }

  render(){
    var myStyle={
      color:'#FF00FF',
      fontSize:200
    }
    return(
        <div>
          <User username={this.props.user.name} age={this.props.user.age}/>

          <button onClick={()=>this.props.setName("NEW PICEHT")}>Change name Store</button>
          
           <br />

          <h1 style={myStyle} >Pichet is here.</h1>
          <h1> Welcome from store > state to props : {this.state.message}</h1>
          <h1> Welcome from prop : {this.state.message}</h1>
          <input type="text" onChange={this.onMessageChange} />

          <h1>{this.state.status}</h1>
          <button onClick={this.onStatusChange}>Like</button> <br />

          <h1>{this.state.data}</h1>
          <button onClick={this.onDataChange}>Load</button> <br />

          <h1>{this.state.count}</h1>
          <button onClick={this.onCountChange}>Count</button>

          
        <Header  name="Pichet" surename="Asayaporn" age="22" />
        

        </div>
    
    );
  }
}




export default connect(mapStatetoProps,mapDispatchtoProps)(App);
