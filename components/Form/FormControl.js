import React from 'react';
import PropTypes from 'prop-types';

// constants and libs
// import styled from 'styled-components';

// components
import FormControl from '@material-ui/core/FormControl';

// Style ==========================================

// CustomFormControl Components
const CustomFormControl = ({ ...restProps }) => (
	<FormControl {...restProps} />
);

/* Props ================================== */
CustomFormControl.propTypes = {
	children: PropTypes.node,
};

CustomFormControl.defaultProps = {
	children: null,
};

/* Export ================================== */
export default CustomFormControl;
