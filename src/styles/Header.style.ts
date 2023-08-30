import { styled } from 'styled-components';

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid #ccc;
	padding: 10px;
	background-color: #f9f9f9;

	a {
		text-decoration: none;
		color: #333;
		font-weight: bold;
		margin-right: 10px;

		&:hover {
			text-decoration: underline;
		}
	}

	span {
		font-size: 1.2rem;
	}
`;

export default HeaderContainer;
