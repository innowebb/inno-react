import React, { memo } from 'react';
import styled from 'styled-components';

// consts

// libs
import Translation from 'libs/Translation';

// Components
import Typography from 'components/Typography';

// Styles
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px 24px;

	.copyright {
        display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
		height: 40px !important;
	}

`;

/* Footer Component ================================== */
const Footer = () => (
	<Wrapper className="footer">
		<div className="copyright">
			<Typography type="secondary">{Translation.t('text.copy_right')}</Typography>
		</div>
	</Wrapper>
);

/* Props ================================== */
Footer.propTypes = {

};

Footer.defaultProps = {
};

// /* Export ================================== */
export default memo(Footer);
