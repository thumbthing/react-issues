import styled from 'styled-components';

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f4f4f4;
	font-family: Arial, sans-serif;
`;

export const ErrorMessageContainer = styled.div`
	border: 3px solid #ccc;
	border-radius: 8px;
	padding: 20px;
	margin-bottom: 20px;
`;

export const Header = styled.h1`
	font-size: 24px;
	margin-bottom: 10px;
`;

export const Subheader = styled.h3`
	font-size: 18px;
	text-align: center;
	margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

export const Button = styled.button`
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border: none;
	border-radius: 80px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
	}
`;
