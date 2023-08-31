import React from 'react';
import LoadingContainer from '../styles/Loading.style';

function Loading() {
	return (
		<LoadingContainer>
			<h1>
				Please wait for a second
				<br />
				<br />
				Loading new issues ...
			</h1>
		</LoadingContainer>
	);
}

export default Loading;
