import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-modern-calendar-datepicker';
import styled from 'styled-components';

// Components
import Typography from 'components/Typography';

// Styles
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';

const Wrapper = styled.div`
	[dir="ltr"] & { font-family: ${p => p.theme['@font-family-fa']} !important }
	[dir="rtl"] & { font-family: ${p => p.theme['@font-family-en']} !important; }

	.DatePicker {
		width: 100%;
		z-index: unset;
	}

	.DatePicker__calendarContainer {
		z-index: 1000;
		position: fixed;
		top: calc(50vh - 200px);
	}

	.label {
		margin-bottom: 10px;
		display: inline-block;
		/* color: ${p => p.theme.text_color.n}; */
		/* font-size: ${p => p.theme.font_size.n}; */
	}

	input {
		border-color: ${p => p.theme['@input-border-color']};
		/* color: ${p => p.theme.text_color.dd}; */
		border-radius: 4px;
		transition: all 0.2s ease;
		width: 100% !important;
		[dir="ltr"] & { text-align: left !important; }
		[dir="rtl"] & { text-align: right !important; }
		font-size: inherit;
	}

	${p => p.size === 'md' && `
		input {
			padding: 10px 15px;
		}
	`}

	${p => p.size === 'lg' && `
		input {
			padding: 15px 20px;
		}
	`}

	${p => p.type === 'simple' && `
		input {
			border: none;
			// border-bottom: 1px solid ${p.theme['@input-border-color']};
			padding: 0;
		}
	`}
`;

// CustomDatePicker Component
const CustomDatePicker = ({
	placeholder, value, label, locale, type, size, onChange,
}) => (
	<Wrapper type={type} size={size}>
		{label && <Typography className="label">{label}</Typography>}
		<DatePicker
			value={value}
			onChange={onChange}
			inputPlaceholder={placeholder}
			shouldHighlightWeekends
			locale={locale}
		/>
	</Wrapper>
);

/* Props ================================== */
CustomDatePicker.propTypes = {
	placeholder: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	label: PropTypes.string,
	locale: PropTypes.string,
	type: PropTypes.oneOf(['bordered', 'simple']),
	size: PropTypes.oneOf(['md', 'lg']),
	onChange: PropTypes.func,
};

CustomDatePicker.defaultProps = {
	placeholder: ' ',
	value: '',
	label: '',
	locale: 'fa',
	type: 'bordered',
	size: 'md',
	onChange: () => {},
};

/* Export ================================== */
export default CustomDatePicker;
