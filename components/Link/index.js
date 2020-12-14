import React from 'react';
import PropTypes from 'prop-types';

// constants and libs
import APP_CONSTANTS from 'constants/app';

// libs
import Routing from 'libs/Routing';
import Translation from 'libs/Translation';
import Util from 'libs/Util';

const { Link } = Routing.routes;

// Link Component
const CustomLink = ({
	children, to, params, ...restProps
}) => {
	// Create Params
	const lang = Translation.lang === APP_CONSTANTS.DEFAULT_LANG ? null : Translation.lang;
	const newParams = { lang, ...params };
	if (params && params.title) {
		newParams.title = Util.urlFriendlyTitle(params.title);
	}

	// Open in new screen
	const newProps = { ...restProps };
	return (
		<Link to={to} params={newParams}>
			<a {...newProps}>
				{children}
			</a>
		</Link>
	);
};

/* Props ================================== */
CustomLink.propTypes = {
	to: PropTypes.string.isRequired,
	params: PropTypes.shape(),
	children: PropTypes.node,
	className: PropTypes.string,
};

CustomLink.defaultProps = {
	params: {},
	children: null,
	className: '',
};

/* Export ================================== */
export default CustomLink;
