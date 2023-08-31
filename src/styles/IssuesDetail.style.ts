import styled from 'styled-components';

export const DetailContainer = styled.div`
	display: flex;
	padding-top: 80px;
	padding-left: 20px;
	padding-right: 20px;
	flex-direction: column;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 90px;
	margin: 10px;
	margin-right: 1vh;
	justify-content: center;
`;

export const IssueInfoContainer = styled.div`
	display: flex;
	margin: 10px;
	justify-content: space-between;
`;

export const ImageIssueTitle = styled.div`
	display: flex;
	padding: 10px;
	margin: 20px;
	margin-right: 90px;

	> img {
		width: 10rem;
		height: 10rem;
		margin: 20px;
		border-radius: 50%;
	}
`;

export const UserDateComments = styled.div`
	> div {
		padding-top: 30px;
	}
`;

export const MarkdownContainer = styled.div`
	padding-left: 20px;
	padding-right: 20px;
`;
