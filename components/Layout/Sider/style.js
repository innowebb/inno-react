import styled from 'styled-components';

export default styled.aside`
	height: 100vh;
	width: ${p => p.theme.layout.siderWidth};
	transition: transform 0.3s ease 0s;
	position: absolute;
	top: 0;
	z-index: 10;
	background-color: ${p => p.theme.palette.background.paper};
	
	[dir="rtl"] .menu-open & {
		${p => `transform: translate(-${p.theme.layout.siderWidth});`}
	}
	[dir="ltr"] .menu-open & {
		${p => `transform: translate(${p.theme.layout.siderWidth});`}
	}

	[dir="rtl"] & {
		left: 100%;
		border-left: 1px solid rgba(0, 0, 0, 0.12);
	}
	[dir="ltr"] & {
		right: 100%;
		border-right: 1px solid rgba(0, 0, 0, 0.12);
	}

	@media (min-width: ${p => `${p.theme.breakpoints.values.md}px`}) {
		position: fixed;
		right: unset !important;
		left: unset !important;
		transform: none !important;
	}

	.inner {
		height: 100%;
    	overflow-x: hidden;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
	}

	.head {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: ${p => p.theme.layout.headerHeight};
		max-height: ${p => p.theme.layout.headerHeight};
		margin-bottom: 20px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	}

	.logo {
		height: 45%;
		width: auto
	}

	.content {
		color: ${p => p.theme.palette.text.primary};
		padding: 16px;

		a {
			display: block;
		}

		.item {
			align-items: center;
			cursor: pointer;
			padding: 12px 10px;
			border-radius: 4px;
			margin-bottom: 12px;

			&:hover {
				background-color: rgba(100, 100, 100, 0.05);
			}

			&.active {
				color: ${p => p.theme.palette.secondary.light};
			}
		}

		ul ul {
			margin-top: -16px;
			margin-bottom: 8px;

			.item {
				margin-bottom: 0;
				padding: 10px 50px;
				opacity: 0.9;
			}
		}

		.open {
			.icon[class*="chevron"] {
				[dir="ltr"] & { transform: rotate(270deg) }
				[dir="rtl"] & { transform: rotate(-90deg) }
			}
		}

		.icon {
			pointer-events: none;
			[dir="rtl"] & { margin-left: 10px; }
			[dir="ltr"] & { margin-right: 10px; }
			/* transition: transform 100ms; */
			&[class*="chevron"] {
				opacity: 0.4;
				position: absolute;
				margin: 0;
				[dir="rtl"] & { left: 10px; }
				[dir="ltr"] & { right: 10px; transform: rotate(180deg) }
			}
		}
	}
`;
