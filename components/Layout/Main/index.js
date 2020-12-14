import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';

// libs
import Translation from 'libs/Translation';

// Components
import Typography from 'components/Typography';
import Breadcrumbs from 'components/Breadcrumbs';
import Fade from '@material-ui/core/Fade';

// style
const Wrapper = styled.main`
    display: flex;
    flex: 1;
	flex-direction: column;
	min-height: 90vh;
	padding: ${p => p.padding};

	.page-header {
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.page-title {
		margin-bottom: 10px;
	}
	.page-breadcrumbs {
		/* margin-bottom: 10px; */
	}
`;

// Main Component
const Main = ({
	children,
	title,
	breadcrumbs,
	headerComponent,
	...restProps
}) => {
	let modifiedBreadcrumbs = null;
	if (breadcrumbs) {
		modifiedBreadcrumbs = [
			{ label: Translation.t('title.intro'), link: 'intro' },
			...breadcrumbs,
		];
	}

	return (
		<Wrapper {...restProps}>
			{title ? <Head><title>{title}</title></Head> : null}
			<div>
				<Fade in mountOnEnter unmountOnExit timeout={{ enter: 200 }}>
					<div key="1" className="page-header">
						<div>
							{title ? <Typography key="1" variant="h5" className="page-title">{title}</Typography> : null}
							{modifiedBreadcrumbs ? <Breadcrumbs key="2" className="page-breadcrumbs" items={modifiedBreadcrumbs} /> : null}
						</div>
						{headerComponent ? (
							<div>
								{headerComponent}
							</div>
						) : null}
					</div>
				</Fade>
				<Fade in mountOnEnter unmountOnExit timeout={{ enter: 400 }}>
					<div key="3">
						{children}
					</div>
				</Fade>
			</div>
		</Wrapper>
	);
};

/* Props ================================== */
Main.propTypes = {
	breadcrumbs: PropTypes.arrayOf(PropTypes.object),
	children: PropTypes.node,
	headerComponent: PropTypes.node,
	title: PropTypes.string,
	padding: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
};

Main.defaultProps = {
	breadcrumbs: null,
	headerComponent: null,
	children: null,
	title: '',
	padding: '40px 0 0',
};

/* Export ================================== */
export default Main;
