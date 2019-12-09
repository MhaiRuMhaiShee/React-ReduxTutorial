import React, { Component } from 'react';

class User extends Component{
    render(){
     return(
       <div>
    <h3>User : {this.props.username} and age is {this.props.age}</h3>
       </div>
   );
    }
  }

  export default User