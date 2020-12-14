import styled from 'styled-components';

export default styled.div`
	width: 100%;

	.toolbar {
		justify-content: space-between;
	}
	.avatar {
		background-color: #aaa;
	}
	

	@media (min-width: ${p => `${p.theme.breakpoints.values.md}px`}) {
		.menu {
			display: none;
		}
	}
`;
