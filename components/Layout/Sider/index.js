import React, {
	memo, useContext, useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';

// Components
import Logo from 'components/Logo';
import ItemList from './ItemList';

// Context
import Context from '../Context';

// Styles
import Wrapper from './style';

/* Sider Component ================================== */
const Sider = ({ items, open }) => {
	const { activeRoute, theme } = useContext(Context);
	const [selectedItems, setSelectedItems] = useState([]);

	useEffect(() => {
		let selectedItem;
		items.forEach(item => {
			if (item.items) {
				item.items.forEach(subItem => {
					if (subItem.link === activeRoute) {
						selectedItem = item.key;
					}
				});
			}
		});
		setSelectedItems([...new Set([...selectedItems, selectedItem])]);
	}, [activeRoute]);

	const _handleItemClick = useCallback(e => {
		const key = e.target.attributes.name.value;

		const newArray = [...selectedItems];
		const index = newArray.indexOf(key);
		if (index > -1) {
			newArray.splice(index, 1);
		}
		else {
			newArray.push(key);
		}
		setSelectedItems(newArray);
	}, [selectedItems]);

	return (
		<Wrapper open={open}>
			<div className="inner">
				<div className="head">
					<Logo to="home" theme={theme} />
				</div>

				<div className="content">
					<ItemList
						items={items}
						activeRoute={activeRoute}
						selectedItems={selectedItems}
						onItemClick={_handleItemClick}
					/>
				</div>
			</div>
		</Wrapper>
	);
};

/* Props ================================== */
Sider.propTypes = {
	open: PropTypes.bool,
	items: PropTypes.arrayOf(PropTypes.shape()),
};

Sider.defaultProps = {
	open: false,
	items: [],
};

// /* Export ================================== */
export default memo(Sider);
