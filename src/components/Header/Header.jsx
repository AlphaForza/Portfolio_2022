import React from 'react';
import './Header.css';
import { BsFillPersonFill, BsFillEyeFill } from 'react-icons/bs';
import { images } from '../../constants/index';

const Header = () => {
	return (
		<div id='home' className='app__header '>
			<div className='app__header-content padding__section'>
				<div className='app__header-content-info'>
					<h3>Hello, i'm</h3>
					<h1>Jayjay D. Dinero</h1>
					<p>
						Freelance UI designer, Fullstack developer, & Data Miner.
						I create seamless web experiences for end-users.
					</p>
					<div className='app__header-content-button'>
						<div className='app__header-firstBtn active'>
							<a href='#'>
								About me <BsFillPersonFill />
							</a>
						</div>
						<div className='app__header-secondBtn'>
							<a href='#'>
								Projects
								<BsFillEyeFill />
							</a>
						</div>
					</div>
				</div>
				<div className='app__header-image'>
					<div className='app__header-image-circle'></div>
					<img src={images.headerImg} alt='headerImg' />
				</div>
			</div>
			<div className='app__header-footer' />
		</div>
	);
};

export default Header;
