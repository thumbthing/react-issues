import React from 'react';

function Advertisements() {
	const imageURL = `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100`;

	return (
		<div>
			<img alt="advertisement" src={imageURL} />
		</div>
	);
}

export default Advertisements;
