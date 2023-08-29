import React from 'react';
import { Link } from 'react-router-dom';

const ADVERTISEMENT_URL = 'https://www.wanted.co.kr/';

function Advertisements() {
	const imageURL = `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100`;

	return (
		<div>
			<Link to={ADVERTISEMENT_URL} target="_self">
				<img alt="advertisement" src={imageURL} />
			</Link>
		</div>
	);
}

export default Advertisements;
