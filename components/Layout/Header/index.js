import React, { memo, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';

// libs
import APP_CONSTANTS from 'constants/app';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Icon from 'components/Icon';
import IconButton from 'components/IconButton';

// Context
import Context from '../Context';

// Styles
import Wrapper from './style';

/* Header Component ================================== */
const Header = ({ onMenuClick, onLogout }) => {
	const { setThemeAction, theme } = useContext(Context);
	// const [anchorEl, setAnchorEl] = useState(null);

	const _handleThemeClick = useCallback(() => {
		const newTheme = theme === APP_CONSTANTS.THEME.LIGHT
			? APP_CONSTANTS.THEME.DARK : APP_CONSTANTS.THEME.LIGHT;
		setThemeAction(newTheme);
	}, [theme]);

	// const _handleAccountOpen = useCallback(e => {
	// 	setAnchorEl(e.currentTarget);
	// }, []);

	// const _handleAccountClose = useCallback(() => {
	// 	setAnchorEl(null);
	// }, []);

	return (
		<Wrapper>
			<AppBar position="static" elevation={0}>
				<Toolbar className="toolbar">
					<div>
						<IconButton edge="start" className="menu" color="inherit" aria-label="menu" onClick={onMenuClick}>
							<Icon name="menu" size={35} />
						</IconButton>
						{/* <Typography variant="h6">
							{title}
						</Typography> */}
					</div>
					<div>
						<IconButton color="inherit" onClick={_handleThemeClick}>
							{theme === APP_CONSTANTS.THEME.LIGHT ? <Icon name="moon" size={22} /> : <Icon name="sun" size={22} />}
						</IconButton>
						<IconButton edge="end" color="inherit" onClick={onLogout}>
							<Icon name="logOut" size={22} />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</Wrapper>
	);
};

/* Props ================================== */
Header.propTypes = {
	onMenuClick: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
};

// /* Export ================================== */
export default memo(Header);
