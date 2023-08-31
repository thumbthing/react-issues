import styled from 'styled-components';

const IssueDetialItemContainer = styled.div`
	border: 1px solid #ccc;
	padding: 10px;
	margin: 10px 0;
	background-color: #f9f9f9;
	padding: 70px;

	> div {
		display: flex;
		justify-content: space-between;
		font-weight: bold;

		> img {
			width: 100px;
			height: 100px;
		}
	}

	> div:nth-child(2) {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
		font-size: 0.8rem;
		color: #666;
	}

	> div:nth-child(3) {
		margin-top: 5px;
		font-size: 0.9rem;
		color: #333;
	}
`;

export default IssueDetialItemContainer;
