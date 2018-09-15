import React from 'react';
import './Uploader.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
	}	
	render() {
		
	return (
      <div>
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="leftnav">
		 <h3 style={{textAlign:"center"}}>UPLOADER.</h3>
		</div>
		<div className="rightnav">
		<form>
         <input type="text" placeholder="Search..." className="search" style={{backgroundImage:"url('search.png')",backgroundSize:"25px 20px"}}/>
		 <span className="rightnavbar">
		 <Link to=""><i className="fa fa-cog" style={{fontSize:"20px",color:"black"}}></i></Link>
		 <Link to=""><i className="fa fa-bell" style={{fontSize:"20px",color:"black",padding:"30px"}}></i></Link>
         <Link to=""><img src="shuvikash.jpg" alt="Avatar" className="avatar"/></Link>
		 </span>
        </form>
		</div>
      </div>
     );
    }
}

export default NavBar;