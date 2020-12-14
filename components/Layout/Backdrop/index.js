import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const Wrapper = styled.div`
	position: absolute;
	z-index: 10;
	background-color: rgba(10, 10, 10, 0.4);
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	animation: fade 0.2s ease-in-out;

	@media (min-width: ${p => `${p.theme.breakpoints.values.md}px`}) {
		display: none;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

/* Backdrop Component ================================== */
const Backdrop = ({ show, ...props }) => (
	show ? <Wrapper {...props} /> : null
);

/* Props ================================== */
Backdrop.propTypes = {
	show: PropTypes.bool,
};

Backdrop.defaultProps = {
	show: false,
};

// /* Export ================================== */
export default Backdrop;
