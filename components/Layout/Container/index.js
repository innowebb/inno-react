import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

// CustomContainer Component
const CustomContainer = ({ children }) => (
	<Container maxWidth="lg">
		{children}
	</Container>
);

/* Props ================================== */
CustomContainer.propTypes = {
	children: PropTypes.node,
};

CustomContainer.defaultProps = {
	children: null,
};

/* Export ================================== */
export default CustomContainer;
