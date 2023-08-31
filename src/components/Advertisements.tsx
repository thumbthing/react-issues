import React from 'react';
import { AdImage, AdvertisementContainer, AdvertisementLink } from '../styles/Advertisement.style';

const ADVERTISEMENT_URL = 'https://www.wanted.co.kr/';

function Advertisements() {
	const imageURL = `https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100`;

	return (
		<AdvertisementContainer>
			<AdvertisementLink to={ADVERTISEMENT_URL} target="_self">
				<AdImage alt="advertisement" src={imageURL} />
			</AdvertisementLink>
		</AdvertisementContainer>
	);
}

export default Advertisements;
