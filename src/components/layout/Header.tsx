import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../../styles/Header.style';

const HEADER_INFO = {
	base_url: 'https://github.com',
	organization: {
		name: 'facebook',
		url: '/facebook',
	},
	repository: {
		name: 'react',
		url: '/react',
	},
};

function Header() {
	const organizationURL = `${HEADER_INFO.base_url}${HEADER_INFO.organization.url}`;
	const repositoryURL = `${HEADER_INFO.base_url}${HEADER_INFO.repository.url}`;
	return (
		<HeaderContainer>
			<Link to={organizationURL}>
				<span>{HEADER_INFO.organization.name}</span>
			</Link>
			{' /'}
			<span>&nbsp;&nbsp;</span>
			<Link to={repositoryURL}>
				<span>{HEADER_INFO.repository.name}</span>
			</Link>
		</HeaderContainer>
	);
}

export default Header;
