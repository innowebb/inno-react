import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

// CustomAvatar Component
const CustomAvatar = ({ className, ...props }) => (
	<Avatar className={`avatar ${className}`} {...props} />
);

/* Props ================================== */
CustomAvatar.propTypes = {
	className: PropTypes.string,
};

CustomAvatar.defaultProps = {
	className: '',
};

/* Export ================================== */
export default CustomAvatar;
