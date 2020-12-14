import React from 'react';
import PropTypes from 'prop-types';

// constants and libs
// import styled from 'styled-components';

// components
import TextField from '@material-ui/core/TextField';

// Style ==========================================

// TextInput Components
const TextInput = ({ ...restProps }) => (
	<TextField variant="outlined" size="small" {...restProps} />
);

/* Props ================================== */
TextInput.propTypes = {
	children: PropTypes.node,
};

TextInput.defaultProps = {
	children: null,
};

/* Export ================================== */
export default TextInput;
