import React from 'react';
// import PropTypes from 'prop-types';
import { DataGrid } from '@material-ui/data-grid';

// constants

/* styles =================================== */

const CustomDataGrid = ({ ...props }) => (
	<DataGrid {...props} />
);

/* Props ================================== */
CustomDataGrid.propTypes = {
};

CustomDataGrid.defaultProps = {
};

// /* Export ================================== */
export default CustomDataGrid;
