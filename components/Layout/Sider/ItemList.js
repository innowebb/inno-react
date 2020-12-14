import React, { memo } from 'react';
import PropTypes from 'prop-types';

// Libs
import Translation from 'libs/Translation';

// Components
import Icon from 'components/Icon';
import Link from 'components/Link';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';

/* ItemList Component ================================== */
const ItemList = ({
	items, onItemClick, selectedItems, activeRoute,
}) => (
	<List>
		{items.map(item => {
			if (item.items && item.items.length) {
				const open = selectedItems.includes(item.key);
				return (
					<div key={item.key}>
						<ListItem className={`item ${open ? 'open' : ''}`} name={item.key} button onClick={onItemClick}>
							{item.icon ? <Icon name={item.icon} /> : null}
							{Translation.t(item.label)}
							<Icon name="chevronLeft" />
						</ListItem>

						<Collapse in={open} timeout="auto" unmountOnExit>
							<ItemList
								items={item.items}
								onClick={onItemClick}
								activeRoute={activeRoute}
								selectedItems={selectedItems}
							/>
						</Collapse>
					</div>
				);
			}

			return (
				<Link key={item.key} to={item.link}>
					<ListItem className={`item ${activeRoute === item.link ? 'active' : ''}`} name={item.key} button>
						{item.icon ? <Icon name={item.icon} /> : null}
						{Translation.t(item.label)}
					</ListItem>
				</Link>
			);
		})}
	</List>
);

/* Props ================================== */
ItemList.propTypes = {
	selectedItems: PropTypes.arrayOf(PropTypes.string),
	activeRoute: PropTypes.string,
	items: PropTypes.arrayOf(PropTypes.shape({
		key: PropTypes.string.isRequired,
		link: PropTypes.string,
		icon: PropTypes.string,
	})),
	onItemClick: PropTypes.func,
};

ItemList.defaultProps = {
	selectedItems: [],
	activeRoute: '',
	items: [],
	onItemClick: null,
};

// /* Export ================================== */
export default memo(ItemList);
