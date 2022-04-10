import React, { useState } from 'react';
import './Navbar.css';
import { AiFillCloseCircle, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='app__navbar padding__section'>
			<h1 className='head-text'>Jayjay Dinero</h1>
			<ul className='app__navbar-wrapp'>
				{['Home', 'AboutMe', 'Projects', 'Contact'].map(
					(item, index) => (
						<li className='app__navbar-items' key={item + index}>
							<a href={`#${item}`}>{item}</a>
						</li>
					)
				)}
			</ul>

			<div className='app__navbar-menu'>
				<AiOutlineMenu onClick={() => setToggle(true)} />
				{toggle && (
					<div className='app__navbar-menu-list'>
						<AiFillCloseCircle onClick={() => setToggle(false)} />
						<ul className='app__navbar-menu-wrapp'>
							{['Home', 'AboutMe', 'Projects', 'Contact'].map(
								(item, index) => (
									<li className='app__navbar-item' key={item + index}>
										<a href={`#${item}`}>{item}</a>
									</li>
								)
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
