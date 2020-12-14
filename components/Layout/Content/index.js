import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

// consts
// import APP_ROUTES from 'constants/route';

// libs
// import Translation from 'libs/Translation';

// Components

// Styles
const Wrapper = styled.div`
	width: 100%;
    height: 100%;
    display: flex;
	flex-direction: column;
	overflow: hidden;

	${p => `
		@media (min-width: ${`${p.theme.breakpoints.values.md}px`}) {
			[dir="rtl"] & { padding-right: ${p.theme.layout.siderWidth}; }
			[dir="ltr"] & { padding-left: ${p.theme.layout.siderWidth}; }
		}
	`}

	.inner {
		position: relative;
		overflow: scroll;
		width: 100%;
	}
`;

/* Content Component ================================== */
const Content = ({ children }) => (
	<Wrapper className="content">
		{children}
	</Wrapper>
);

/* Props ================================== */
Content.propTypes = {
	children: PropTypes.node,
};

Content.defaultProps = {
	children: null,
};

// /* Export ================================== */
export default Content;
