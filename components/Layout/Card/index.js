import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// consts

// libs

// Components
import Loader from 'components/Loader';

// Styles
const Wrapper = styled.div`
	position: relative;
	
	.loading {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgba(200, 200, 200, 0.4);
	}

	word-wrap: break-word;
	background-color: ${p => p.theme.palette.background.paper};
	background-clip: border-box;
	border-radius: ${p => `${p.theme.shape.borderRadius}px`};
	padding: 40px 25px;
	
	box-shadow: 0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15);

	/* ${p => p.shadow === 'light' && `
		box-shadow: 0 1px 20px 0 rgba(69, 90, 100, 0.08);
	`} */
`;

/* CustomCard Component ================================== */
const CustomCard = ({ children, loading }) => (
	<Wrapper>
		{loading ? <div className="loading"><Loader /></div> : null}
		{children}
	</Wrapper>
);

/* Props ================================== */
CustomCard.propTypes = {
	children: PropTypes.node,
	loading: PropTypes.bool,
};

CustomCard.defaultProps = {
	children: null,
	loading: false,
};

// /* Export ================================== */
export default CustomCard;
