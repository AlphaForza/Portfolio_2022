import React from 'react';

import './Footer.css';
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillDribbbleCircle,
	AiFillMail,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<div className='app__footer padding__section'>
			<div className='app__footer-text'>
				<p>@2022 Jayjay Dinero Dinero</p>
				<p>FullStack Developer</p>
				<p>UI Designer</p>
				<p>Data Analyst</p>
				<p>Designed by @ernestechie</p>
			</div>
			<div className='app__footer-icons'>
				<AiFillFacebook />
				<AiFillInstagram />
				<AiFillDribbbleCircle />
				<AiFillMail />
			</div>
		</div>
	);
};

export default Footer;
