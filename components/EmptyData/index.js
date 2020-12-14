import React from 'react';
import PropTypes from 'prop-types';

// constants
import Translation from 'libs/Translation';

/* styles =================================== */

const CustomEmpty = ({ description, children, ...restProps }) => (
	<div
		description={description || Translation.t('label.no_data')}
		{...restProps}
	>
		{children}
	</div>
);

/* Props ================================== */
CustomEmpty.propTypes = {
	children: PropTypes.node,
	description: PropTypes.string,
};

CustomEmpty.defaultProps = {
	children: null,
	description: '',
};

// /* Export ================================== */
export default CustomEmpty;
