import { styled } from 'styled-components';

export const StyledIssueItem = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 3px;
	margin: 4px 0;
	background-color: #f9f9f9;
	max-width: 30rem;
	max-height: 7rem;
	min-height: 6rem;

	> div:nth-child(1) {
		display: flex;
		justify-content: space-between;
	}

	> div:nth-child(2) {
		width: 100px;
		margin-top: 5px;
		margin-left: 75vh;
		margin-bottom: 1vh;
		font-size: 0.9rem;
		color: #333;
	}
`;

export const IssueCodeTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	font-weight: bold;
	margin-left: 10px;
	margin-top: 0px;
	max-height: 4vh;
`;

export const IssueUserDateBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5px;
	color: #666;
`;

export const IssueComments = styled.div`
	display: flex;
	font-size: 0.8vh;
`;

export const IssueNumberAndDate = styled.h5`
	margin: 0;
	font-size: 1.2vh;
`;

export const IssueTitleAndUser = styled.h4`
	margin: 0;
	font-size: 1.5vh;
`;
