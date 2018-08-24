import React from 'react';
import axios from 'axios';
import './Page.css';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			email:'',
			password:'',
			message:''
		};
	this.handleChangePassword=this.handleChangePassword.bind(this);
	this.handleChangeEmail=this.handleChangeEmail.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleChangeEmail(e) {
		this.setState({ email: e.target.value });
    }
	
	handleChangePassword(e) {
		this.setState({ password: e.target.value });
    }
	
	//submit the data to api through axios for checking user exists or not
    handleSubmit(e) {
	//to prevent default action happening
    e.preventDefault();
	axios.post("http://localhost:8086/login", {email:this.state.email, password:this.state.password})
      .then(res => {
        console.log(res);
        console.log(res.data);
		if(res.data=="ok")
		{
		let success=<h5 style={{color:"green"}}>You have successfully logged in !!</h5>
		this.setState({ message: success});
		}
		else{
		let failure=<h5 style={{color:"red"}}>Email/Password didn't match !!</h5>
		this.setState({ message: failure});
		}
		
      }).catch(error => {
      let failure=<h5 style={{color:"red"}}>There was an error while login !!</h5>
		this.setState({ message: failure});
      });
    }
	
	render() {
		
	  return (
	  <div>
	   <div className="login-container">
        <div className="form-wrapper">

         <form className="form" onSubmit={this.handleSubmit}>
		 <h4 style={{textAlign:"center"}}>Please Log In</h4>
           <div className="input-group">
            <label htmlFor="useremail" className="label">Email</label>
            <input type="text" className="input" placeholder="Enter email" required onChange={this.handleChangeEmail}/>
           </div>
           <div className="input-group">
            <label htmlFor="userpassword" className="label">Password</label>
             <input type="password" className="input" placeholder="Enter password" required onChange={this.handleChangePassword}/>
         </div>

           <button className="login-btn" type="submit">Log In</button>
         </form>
		 {this.state.message}
         <p className="p">Don't have an account? <Link to="/signup" className="link">Sign up</Link></p>
        </div>
       </div>
	  </div>
	  );
    }
}

export default Login;