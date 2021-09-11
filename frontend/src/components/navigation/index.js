import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'
import { IconName ,  FaUserTie , FaShoppingCart , FaSearch} from "react-icons/fa";

const Navigation = () => {
	return <div className="container">
	<div className='Navigation'> 
	<div className='Searchbar'>
			<input type='text' placeholder='what do you want ' className= "SearchBarInput"></input> 
					<FaSearch className="searchIcon"/> 
		</div>
		<p > <img src="https://mylovely-pet.com/wp-content/uploads/2021/01/Logoheader.svg?1000"/> </p>
	     
		<div className="navbar">
		<Link to="/Home" className='navLogin'>Home</Link>
		<Link to="/login" className='navLogin'>Login</Link>
		<Link to="/Register" className='navRegister'>Register</Link>
		<Link to="/cart" className='navcart'><FaShoppingCart/></Link></div>
		<Link to='/ProductCategory'>category</Link>
		</div>
		 </div>;
};

export default Navigation;
