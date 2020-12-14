import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// constants

// components
import BreadCrumbs from '@material-ui/core/Breadcrumbs';
import Typography from 'components/Typography';
import Icon from 'components/Icon';
import Link from 'components/Link';

const useStyles = makeStyles(theme => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
	},
	icon: {
		marginRight: theme.spacing(0.5),
	},
}));

// CustomButton Component
const CustomButton = ({ items, ...restProp }) => {
	const classes = useStyles();

	return (
		<BreadCrumbs aria-label="breadcrumb" className={classes.wrapper} {...restProp} separator={<Icon name="chevronLeft" size={14} />}>
			{items.map(item => (
				<Typography variant="caption" color="textSecondary" className={classes.item}>
					{item.icon ? <Icon name={item.icon} size={14} className={classes.icon} /> : null}
					{item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
				</Typography>
			))}
		</BreadCrumbs>
	);
};

/* Props ================================== */
CustomButton.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		link: PropTypes.string,
		icon: PropTypes.string,
	})),
};

CustomButton.defaultProps = {
	items: [],
};

/* Export ================================== */
export default CustomButton;
