import React from 'react';
import {FaEnvelope} from  "react-icons/fa"
import "./Footer.css";
import { useHistory } from 'react-router';
import "./Aboutus"
import "./Contactus"
import "./Ourpolicy"



const Footer = () => {

const history =useHistory() 

	const aboutUsEvent = ()=>{
        history.push("/AboutUs")
	}
	

	const ourPolicyEvent = ()=>{
		history.push("/ContactUs")
	}

	const contactUsEvent = ()=>{
		history.push("/OurPolicy")

	}
	




return <div className="FooterPerant"> 
<div className="footerChild">
	<p onClick={()=>{aboutUsEvent()}}>About us </p>
	<p onClick={()=>{ourPolicyEvent()}}>Our Policy</p>
	<span onClick={()=>{contactUsEvent()}} >Contact us <FaEnvelope  className="emailIcon" /></span>
</div>


</div>;
};

export default Footer;