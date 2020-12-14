import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// constants and libs
import { matchRoute } from 'libs/Routing';

/* RouteSwitch Component ====================== */
const RouteSwitch = ({ children }) => {
	if (!children) return null;

	const router = useRouter();
	const route = matchRoute(router.asPath);

	let Component = null;
	let id = 'default';
	children.some(c => {
		if (route === c.props.route) {
			id = c.props.route;
			Component = c.props.component;
			return true;
		}
		return false;
	});

	if (!Component) return null;

	return (
		<Component key={id} />
	);
};

/* Props ========================================= */
RouteSwitch.propTypes = {
	children: PropTypes.node,
};

RouteSwitch.defaultProps = {
	children: null,
};

// /* Export ===================================== */
export default memo(RouteSwitch);
