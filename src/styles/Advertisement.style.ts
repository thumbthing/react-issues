import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const AdvertisementContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10 0 0 10;
	border: 1px solid #ccc;
`;

export const AdvertisementLink = styled(Link)`
	display: block;
	max-width: 100%;
	img {
		max-width: 100%;
		height: auto;
	}
`;

export const AdImage = styled.img`
	max-width: 100%;
	height: auto;
	border-radius: 4px;
	transition: transform 0.2s;
`;
