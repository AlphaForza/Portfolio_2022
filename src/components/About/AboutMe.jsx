import React from 'react';
import './AboutMe.css';
import { images } from '../../constants';
const AboutMe = () => {
	const aboutdb = [
		{ title: 'UI/UX', desc: 'Designing', imgUrl: images.about01 },
		{ title: 'Web', desc: 'Designing', imgUrl: images.about02 },
		{ title: 'Mobile', desc: 'Designing', imgUrl: images.about03 },
		{
			title: 'Web Scraping',
			desc: 'Designing',
			imgUrl: images.about04,
		},
	];
	return (
		<div id='AboutMe' className='app__about padding__section'>
			<div className='app__about-desc'>
				<h3>About me:</h3>
				<p className='p-text-desc'>
					Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web
					developer, UI designer, and Mobile developer. I jhave honed
					my skills in Web Development and advance i have core
					understanding of advance UI design principles. Here are the
					major skiills i have.{' '}
				</p>
				<div className='app__about-desc-text'>
					<h2>5+</h2>
					<p>
						Years of experience. Specialised in building apps, while
						ensuring a seamless web experience for end users.
					</p>
				</div>
			</div>
			<div className='app__about-content'>
				{aboutdb.map((item, index) => (
					<div className='app__about-card' key={index}>
						<img src={item.imgUrl} alt={item.title} />
						<h3>{item.title}</h3>
						<h3>{item.desc}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default AboutMe;
