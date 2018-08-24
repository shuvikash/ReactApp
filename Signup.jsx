import React from 'react';
import axios from 'axios';
import './Page.css';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			email:'',
			password:'',
			repeatpassword:'',
			message:''
		};
	this.handleChangePassword=this.handleChangePassword.bind(this);
	this.handleRepeatPassword=this.handleRepeatPassword.bind(this);
	this.handleChangeEmail=this.handleChangeEmail.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
	}
	
	handleChangeEmail(e) {
		this.setState({ email: e.target.value });
    }
	
	handleChangePassword(e) {
		this.setState({ password: e.target.value });
    }
	
	handleRepeatPassword(e) {
		this.setState({ repeatpassword: e.target.value });
    }
	
	//submit the data to api through axios for checking user exists or not
    handleSubmit(e) {
	//to prevent default action happening
    e.preventDefault();
	if(this.state.password == this.state.repeatpassword)
	{
	axios.post("http://localhost:8086/users", {email:this.state.email, password:this.state.password})
      .then(res => {
        console.log(res);
        console.log(res.data);
		if(res.data=="ok")
		{
		let success=<h5 style={{color:"green"}}>You have successfully Registered !!</h5>
		this.setState({ message: success});
		}
		else{
		let failure=<h5 style={{color:"red"}}>There was an error while Sign Up !!</h5>
		this.setState({ message: failure});
		}
      }).catch(error=> {
   let failure=<h5 style={{color:"red"}}>There was an error while Sign Up !!</h5>
		this.setState({ message: failure});
	
     });
    }
	else{
		alert("Your Repeat password didn't match !!");
	}
	}
	
	render() {
		
	  return (
	  <div>
	   <div className="signup-container">
        <div className="form-wrapper">

         <form className="form" onSubmit={this.handleSubmit}>
		 <h4 style={{textAlign:"center"}}>Please Sign Up</h4>
           <div className="input-group">
            <label htmlFor="useremail" className="label">Email</label>
            <input type="text" className="input" placeholder="Enter email" required onChange={this.handleChangeEmail}/>
           </div>
		   
           <div className="input-group">
            <label htmlFor="userpassword" className="label">Password</label>
             <input type="password" className="input" placeholder="Enter password" required onChange={this.handleChangePassword}/>
         </div>
		 
		 <div className="input-group">
            <label htmlFor="userpassword" className="label">Repeat Password</label>
             <input type="password" className="input" placeholder="Repeat password" required onChange={this.handleRepeatPassword}/>
         </div>

           <button className="signup-btn" type="submit">Sign Up</button>
		   {this.state.message}
         </form>
         <p className="p">Already registered? <Link to="/" className="link">Sign in</Link></p>
        </div>
       </div>
	  </div>
	  );
    }
}

export default Signup;