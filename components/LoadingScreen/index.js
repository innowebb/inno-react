import React, { memo } from 'react';
import styled from 'styled-components';

// Components
import Loader from 'components/Loader';
import Logo from 'components/Logo';

// Styles
const Wrapper = styled.div`
	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1001;
	background: rgba(256, 256, 256, 1);
    display: flex;
	flex-direction: row;
    justify-content: center;
	align-items: center;
	
	animation: fade-in 200ms ease;

	@keyframes fade-in {
		0%   { opacity: 0.4; }
		100% { opacity: 1; }
	}

	> div {
		display: flex;
		flex-direction: column;
		direction: ltr;
		align-items: center;

		.logo {
			margin: 20px 8px;
		}
	}
`;

/* Loading Component ================================== */
const Loading = () => (
	<Wrapper>
		<div>
			<Logo height={40} />
			<Loader type="bar" color="#3256A6" size={10} />
		</div>
	</Wrapper>
);

/* Props ================================== */
Loading.propTypes = {
};

Loading.defaultProps = {
};

/* Export ================================== */
export default memo(Loading);
