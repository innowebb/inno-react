import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import lodashDebounce from 'lodash.debounce';
import Button from '@material-ui/core/Button';

// constants
import APP_CONSTANTS from 'constants/app';

// components
import Loader from '../Loader';

// CustomButton Component
const CustomButton = ({
	debounce,
	children,
	isLoading,
	onClick,
	...restProps
}) => {
	const handleClick = useCallback(
		lodashDebounce(e => {
			if (onClick) onClick(e);
		}, debounce ? APP_CONSTANTS.DEBOUNCE_DELAY : 0, { leading: true, trailing: false }),
	);

	return (
		<Button {...restProps} onClick={handleClick}>
			{isLoading ? <Loader size={8} /> : children}
		</Button>
	);
};

/* Props ================================== */
CustomButton.propTypes = {
	children: PropTypes.node,
	debounce: PropTypes.bool,
	onClick: PropTypes.func,
	isLoading: PropTypes.bool,
};

CustomButton.defaultProps = {
	children: null,
	debounce: true,
	onClick: null,
	isLoading: false,
};

/* Export ================================== */
export default CustomButton;
