import React from 'react';
import axios from 'axios';
import './Uploader.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar.jsx';

class Uploader extends React.Component {
	constructor(props) {
        super(props);
        this.state = {};
	}
	
	render() {
		
	  return (
	  <div>
	  <NavBar />
	  <div className="leftSide">
	  <ul className="ul">
	    <li><Link to="" className="link active"><i className="fa fa-hdd-o" style={{fontSize:"20px",padding:"10px"}}></i>My Drive</Link></li>
		<li><Link to="" className="link"><i className="fa fa-camera" style={{fontSize:"20px",padding:"10px"}}></i>Photos</Link></li>
		<li><Link to="" className="link"><i className="fa fa-file-video-o" style={{fontSize:"20px",padding:"10px"}}></i>Videos</Link></li>
		<li><Link to="" className="link"><i className="fa fa-file" style={{fontSize:"20px",padding:"10px"}}></i>Documents</Link></li>
	  </ul>
	  </div>
	  <div className="rightsSide">
	  <h3>There is no file under root folder</h3>
	  <button style={{backgroundColor:"#4eb8dd",border: "none",height:"40px", width:"150px"}}>Upload a file</button>
	  </div>
	  </div>
	  );
    }
}

export default Uploader;