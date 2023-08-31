import { styled } from 'styled-components';

const ErrorContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	min-height: 50vh;
	max-height: 100vh;
	min-width: 100vh;
	max-width: 200vh;

	h1 {
		font-size: 1.5rem;
		margin-bottom: 10px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}

	h5 {
		font-size: 1rem;
		margin-bottom: 5px;
		color: #888;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
	}
`;

export default ErrorContainer;
