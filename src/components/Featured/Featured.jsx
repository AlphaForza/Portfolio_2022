import React from 'react';
import './Featured.css';

import { featuedCard } from '../../db';

const Featured = () => {
	return (
		<div className='app__featured padding__section'>
			<h3 className='head-text'>Featued projects:</h3>
			<p>
				I have worked on many projects over the course of being a Web
				Developer, here are a few of my live, real-world projects
			</p>
			<div className='app__featured-card'>
				{featuedCard.map((item) => (
					<div className='app__featured-card-item' key={item.title}>
						<img src={item.imgUrl} alt={`img${item.title}`} />
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<div className='app__feature-btn'>
							<a href='#' className='active'>
								View Live
							</a>
							<a href='#'>GitHub Repo</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Featured;
