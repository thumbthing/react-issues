import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorType } from '../types/issue';
import {
	Button,
	ButtonWrapper,
	ErrorMessageContainer,
	Header,
	PageContainer,
	Subheader,
} from '../styles/pages/ErrorPage.style';

interface ErrorPageProps {
	error: ErrorType;
	setErrorClear: () => void;
}

function ErrorPage({ error, setErrorClear }: ErrorPageProps) {
	const navigate = useNavigate();

	const handleOnClick = () => {
		setErrorClear();
	};

	const returnToMainPage = useCallback(() => {
		handleOnClick();
		navigate('/');
	}, [navigate, handleOnClick]);

	const returnToPreviousPage = useCallback(() => {
		handleOnClick();
		navigate(-1);
	}, [navigate, handleOnClick]);

	return (
		<PageContainer>
			<div>
				<Header>사용할 수 없는 페이지 입니다.</Header>
			</div>
			<div>
				<ErrorMessageContainer>
					<Header>{error.name}</Header>
					<Subheader>{error.message}</Subheader>
				</ErrorMessageContainer>
				<Subheader>
					이용에 불편을 드려 죄송합니다 <br /> 주소를 다시 한 번 확인해주세요
				</Subheader>
			</div>

			<ButtonWrapper>
				<Button onClick={returnToPreviousPage}>이전 페이지로</Button>
				<Button onClick={returnToMainPage}>메인 페이지로</Button>
			</ButtonWrapper>
		</PageContainer>
	);
}

export default ErrorPage;
