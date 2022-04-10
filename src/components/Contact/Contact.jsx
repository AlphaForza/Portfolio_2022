import React from 'react';
import './Contact.css';
import {
	AiFillInstagram,
	AiFillFacebook,
	AiFillDribbbleCircle,
	AiFillMail,
} from 'react-icons/ai';

const Contact = () => {
	return (
		<div className='app__contact'>
			<div className='app__contact-text'>
				<h3 className='head-text'>Connect with me:</h3>
				<p>Satisfied with me? Please contact me</p>
				<div className='app__contact-text-icons'>
					<AiFillFacebook />
					<AiFillInstagram />
					<AiFillDribbbleCircle />
					<AiFillMail />
				</div>
			</div>
			<div className='app__contact-form'>
				<h2>Contact me, let’s make magic together</h2>
				<form>
					<div className='app__input'>
						<label>Name: </label>
						<input type='text' />
					</div>
					<div className='app__input'>
						<label>Email: </label>
						<input type='email' />
					</div>
					<div className='app__input message'>
						<label>Message: </label>
						<input type='text' />
					</div>
				</form>
				<button className='btn-form'>Send</button>
			</div>
		</div>
	);
};

export default Contact;
