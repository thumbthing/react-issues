import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorType } from '../types/issue';
import ErrorContainer from '../styles/pages/ErrorPage.style';

interface ErrorPageProps {
	error: ErrorType;
	setErrorClear: () => void;
}

function ErrorPage({ error, setErrorClear }: ErrorPageProps) {
	const navigate = useNavigate();

	const handleOnClick = () => {
		setErrorClear();
		navigate('/');
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			setErrorClear();
			navigate('/');
		}
	};

	return (
		<ErrorContainer role="button" tabIndex={0} onClick={handleOnClick} onKeyDown={handleKeyDown}>
			<h1>{error.name}</h1>
			<h5>{error.message}</h5>
			<h5>press Enter or Space to go back to Issue List</h5>
		</ErrorContainer>
	);
}

export default ErrorPage;
