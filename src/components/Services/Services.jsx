import React, { useState } from 'react';
import './Services.css';
import { images } from '../../constants';
import { newBoxDb } from '../../db';

const Services = () => {
	const [newBox, setNewBox] = useState(newBoxDb);

	return (
		<div id='Projects' className='app__services padding__section'>
			<h3 className='head-text'>The services i offer</h3>

			<div className='cardBox'>
				{newBox.map((box, index) => (
					<div
						key={index}
						className={`card-item ${box.active ? 'activeBox' : ''}`}
						style={
							box.active
								? { border: '2px solid var(--primary-color)' }
								: { border: '2px solid var(--light-color' }
						}>
						<img src={box.imgUrl} alt={box.title} />
						<h3>{box.title}</h3>
						<p>{box.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
