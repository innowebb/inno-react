import React from 'react';

// constants and libs
// import styled from 'styled-components';

// components
import Typography from '@material-ui/core/Typography';

// Style ==========================================

// CustomTypography Components
const CustomTypography = ({ children, ...restProps }) => (
	<Typography {...restProps}>
		{children}
	</Typography>
);

/* Props ================================== */
CustomTypography.propTypes = {
	...Typography.propTypes,
};

CustomTypography.defaultProps = {
	children: null,
};

/* Export ================================== */
export default CustomTypography;
